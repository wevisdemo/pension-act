import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
	limit,
	orderBy,
	startAfter,
} from 'firebase/firestore';
import { parse } from 'valibot';
import { firebaseConfigSchema, PERSONALID_KEY } from '@pension-act/models';
import {
	FIRESTORE_DOCUMENT_COLLECTION,
	IGNORED_PERSONALID,
} from '@pension-act/constants';
import { writeFileSync } from 'fs';

const OUTPUT_DIR = 'out';
const PAGE_LIMIT = 1000;

const firebaseConfig = parse(
	firebaseConfigSchema,
	JSON.parse(process.env.PUBLIC_FIREBASE_CONFIG ?? '{}'),
);

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

(async () => {
	const [email, password] = (process.env.PUBLIC_FIREBASE_ADMIN ?? ',').split(
		',',
	);

	await signInWithEmailAndPassword(auth, email, password);

	console.log('Logged in as admin.');

	let lastPersonalid: string = '';
	let batchCount = 1;
	let isCompleted = false;

	do {
		const documents: unknown[] = [];

		const res = await getDocs(
			query(
				collection(firestore, FIRESTORE_DOCUMENT_COLLECTION),
				where(PERSONALID_KEY, '!=', IGNORED_PERSONALID),
				orderBy(PERSONALID_KEY),
				limit(PAGE_LIMIT),
				...(lastPersonalid ? [startAfter(lastPersonalid)] : []),
			),
		);

		lastPersonalid = res.docs[res.size - 1].get(PERSONALID_KEY);

		console.log(
			`Batch ${batchCount}: ${res.docs[0].get(
				PERSONALID_KEY,
			)} - ${lastPersonalid} (${res.size}) are retrieved.`,
		);

		res.forEach((doc) => documents.push(doc.data()));

		writeFileSync(
			`${OUTPUT_DIR}/raw-${batchCount}.json`,
			JSON.stringify(documents),
		);

		batchCount++;
		isCompleted = res.size < PAGE_LIMIT;
	} while (!isCompleted);

	process.exit(0);
})();
