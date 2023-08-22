import {
	object,
	string,
	toTrimmed,
	length,
	type Output,
	optional,
	minLength,
} from 'valibot';

export const PERSONALID_KEY = 'personalid';

export const documentSchema = object({
	[PERSONALID_KEY]: string([toTrimmed(), length(13)]),
	prefix: optional(string()),
	firstname: string([toTrimmed(), minLength(1)]),
	lastname: string([toTrimmed(), minLength(1)]),
	signature: string('กรุณาลงชื่อ'),
});

export type Document = Output<typeof documentSchema>;
