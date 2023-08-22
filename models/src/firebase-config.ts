import { object, string } from 'valibot';

export const firebaseConfigSchema = object({
	apiKey: string(),
	authDomain: string(),
	projectId: string(),
	storageBucket: string(),
	messagingSenderId: string(),
	appId: string(),
});
