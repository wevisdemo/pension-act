import { object, string, toTrimmed, length, type Output } from 'valibot';

export const documentSchema = object({
	personalid: string([toTrimmed(), length(13, 'รหัสประชาชนต้องมี 13 หลัก')]),
	signature: string('กรุณาเซ็นชื่อ'),
});

export type Document = Output<typeof documentSchema>;
