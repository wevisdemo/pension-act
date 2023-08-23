import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
} from 'firebase/firestore';
import { parse } from 'valibot';
import { firebaseConfigSchema, PERSONALID_KEY } from '@conforall/models';
import {
	FIRESTORE_DOCUMENT_COLLECTION,
	IGNORED_PERSONALID,
} from '@conforall/constants';
import { writeFileSync } from 'fs';

const OUTPUT_FILE = 'raw.json';

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

	const documents = await getDocs(
		query(
			collection(firestore, FIRESTORE_DOCUMENT_COLLECTION),
			where(PERSONALID_KEY, '!=', IGNORED_PERSONALID),
		),
	);

	console.log(`${documents.size} documents found.`);

	writeFileSync(OUTPUT_FILE, JSON.stringify(documents));

	console.log(`Output is written to ${OUTPUT_FILE}`);

	process.exit(0);
})();
