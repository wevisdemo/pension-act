import { Document, PERSONALID_KEY } from '@conforall/models';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import * as aq from 'arquero';

const OUTPUT_DIR = 'out';
const WITH_SIGNATURE_MAX_ROW = 10000;

const documents = readdirSync(OUTPUT_DIR)
	.filter((path) => path.endsWith('.json'))
	.reduce<Document[]>((list, path) => {
		list.push(...JSON.parse(readFileSync(`${OUTPUT_DIR}/${path}`, 'utf-8')));
		return list;
	}, []);

console.log(`Original data has ${documents.length} rows`);

const cleanData = aq
	.from(documents)
	.filter(
		aq.escape(
			(d: Document) =>
				d.firstname.length > 3 &&
				d.lastname.length > 1 &&
				d[PERSONALID_KEY].split('').every((digit) => !isNaN(+digit)) &&
				validatePersonalId(d[PERSONALID_KEY]),
		),
	)
	.derive({
		name: (d: Document) =>
			`${aq.op.trim(d.firstname)} ${aq.op.trim(d.lastname)}`,
	})
	.dedupe(PERSONALID_KEY, 'name')
	.reify();

writeFileSync(
	`${OUTPUT_DIR}/conforall-cleaned.csv`,
	cleanData.select(PERSONALID_KEY, 'name').print().toCSV(),
);

for (let i = 0; i * WITH_SIGNATURE_MAX_ROW < cleanData.size; i++) {
	writeFileSync(
		`${OUTPUT_DIR}/conforall-cleaned-signature-${i + 1}.csv`,
		cleanData
			.slice(i * WITH_SIGNATURE_MAX_ROW, (i + 1) * WITH_SIGNATURE_MAX_ROW)
			.select(PERSONALID_KEY, 'name', 'signature')
			.toCSV(),
	);
}

// https://th.wikipedia.org/wiki/เลขประจำตัวประชาชนไทย#ตัวเลขหลักที่_13
function validatePersonalId(value: string) {
	const n13 = +value.charAt(12);
	const sum = value
		.substring(0, 12)
		.split('')
		.reduce((sum, value, i) => sum + (13 - i) * +value, 0);
	const x = sum % 11;
	const expectedN13 = x <= 1 ? 1 - x : 11 - x;

	return expectedN13 === n13;
}
