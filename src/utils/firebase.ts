import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { parse } from 'valibot';
import { firebaseConfigSchema } from '../models/firebase-config';
import type { Document } from '../models/document';

const FIRESTORE_DOCUMENT_COLLECTION = 'documents';

const firebaseConfig = parse(
	firebaseConfigSchema,
	JSON.parse(import.meta.env.PUBLIC_FIREBASE_CONFIG ?? ''),
);

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const submitDocument = (document: Document) =>
	addDoc(collection(firestore, FIRESTORE_DOCUMENT_COLLECTION), document);
