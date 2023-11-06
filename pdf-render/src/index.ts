import { writeFile, readdir, readFile, mkdir } from 'fs/promises';
import { fill } from './fill';
import { parse } from 'csv-parse/sync';

const INPUT_DIR = 'in';
const OUTPUT_DIR = 'out';

const TARGETTED_FILENAME = 'pension-act-cleaned-signature-';

export type SignedPetition = {
	personalid: string;
	name: string;
	signature: string;
};

async function main() {
	const filenames = (await readdir(INPUT_DIR)).filter((filename) =>
		filename.startsWith(TARGETTED_FILENAME),
	);

	let counter = 0;
	await mkdir(OUTPUT_DIR, { recursive: true });

	for (let i = 0; i < filenames.length; i++) {
		const filename = filenames[i];
		console.log(`Reading ${filename}...`);
		const fileContent = (await readFile(`${INPUT_DIR}/${filename}`)).toString();
		const signs: SignedPetition[] = parse(fileContent, {
			columns: true,
		}) as SignedPetition[];

		console.log(`Filling ${signs.length} signatures...`);
		const pdfBytes = await fill(signs);

		const outputFilename = `${OUTPUT_DIR}/pension-act-signature-${i + 1}.pdf`;
		console.log(`Writing ${outputFilename}...`);
		await writeFile(outputFilename, pdfBytes);

		counter += signs.length;

		console.log(`----------------------------`);
	}

	console.log(`Finished. Filled ${counter} signatures to PDFs.`);
}

main();
