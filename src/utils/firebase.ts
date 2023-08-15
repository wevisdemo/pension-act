import { initializeApp } from 'firebase/app';
import {
	Auth,
	User,
	getAuth,
	onAuthStateChanged,
	signInAnonymously,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	serverTimestamp,
	writeBatch,
	doc,
} from 'firebase/firestore/lite';
import { parse } from 'valibot';
import { firebaseConfigSchema } from '../models/firebase-config';
import type { Document } from '../models/document';

const FIRESTORE_DOCUMENT_COLLECTION = 'documents';
const FIRESTORE_USER_COLLECTION = 'users';

const firebaseConfig = parse(
	firebaseConfigSchema,
	JSON.parse(import.meta.env.PUBLIC_FIREBASE_CONFIG ?? ''),
);

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

const getUser = (auth: Auth): Promise<User> => {
	return new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				return resolve(user);
			}
			return reject();
		});
	});
};

export const submitDocument = async (document: Document) => {
	await signInAnonymously(auth);
	const user = await getUser(auth);

	const batch = writeBatch(firestore);

	const docRef = doc(collection(firestore, FIRESTORE_DOCUMENT_COLLECTION));

	const userRef = doc(firestore, FIRESTORE_USER_COLLECTION, user.uid);

	batch.set(docRef, {
		...document,
		uid: user.uid,
		timestamp: serverTimestamp(),
	});
	batch.set(userRef, { timestamp: serverTimestamp() }, { merge: true });

	return batch.commit();
};
