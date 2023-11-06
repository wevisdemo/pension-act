import {
	object,
	string,
	toTrimmed,
	length,
	type Output,
	optional,
	minLength,
	regex,
} from 'valibot';

export const PERSONALID_KEY = 'personalid';

export const documentSchema = object({
	location: string([toTrimmed(), minLength(1)]),
	day: string('วันที่ไม่ถูกต้อง', [regex(/([1-9]|[12][0-9]|3[01])/)]),
	month: string('เดือนไม่ถูกต้อง', [regex(/[1-9]|1[0-2]/)]),
	year: string('ปีไม่ถูกต้อง', [
		regex(/(190[0-9]|19[1-9][0-9]|20[0-9]{2}|2100)/),
	]),
	[PERSONALID_KEY]: string([toTrimmed(), length(13)]),
	prefix: optional(string()),
	email: optional(string()),
	phone: optional(string()),
	firstname: string([toTrimmed(), minLength(1)]),
	lastname: string([toTrimmed(), minLength(1)]),
	signature: string('กรุณาลงชื่อ'),
});

export type Document = Output<typeof documentSchema>;
