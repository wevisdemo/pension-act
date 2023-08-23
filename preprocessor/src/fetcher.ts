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
	startAt,
} from 'firebase/firestore';
import { parse } from 'valibot';
import { firebaseConfigSchema, PERSONALID_KEY } from '@conforall/models';
import {
	FIRESTORE_DOCUMENT_COLLECTION,
	IGNORED_PERSONALID,
} from '@conforall/constants';
import { writeFileSync } from 'fs';

const OUTPUT_FILE = 'raw.json';
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

	const documents: unknown[] = [];
	let isCompleted = false;

	do {
		const res = await getDocs(
			query(
				collection(firestore, FIRESTORE_DOCUMENT_COLLECTION),
				where(PERSONALID_KEY, '!=', IGNORED_PERSONALID),
				limit(PAGE_LIMIT),
				startAt(documents.length),
			),
		);

		console.log(
			`Documents number ${documents.length}-${
				documents.length + res.size
			} are retrieved.`,
		);

		documents.push(...res.docs);
		isCompleted = res.size < PAGE_LIMIT;
	} while (!isCompleted);

	console.log(`Total ${documents.length} documents found.`);

	writeFileSync(OUTPUT_FILE, JSON.stringify(documents));

	console.log(`Output is written to ${OUTPUT_FILE}`);

	process.exit(0);
})();
