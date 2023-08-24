import { readFile } from 'fs/promises';
import { PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { SignedPetition } from '.';

const SIGNATURE_PER_PAGE = 8;
const ROW_HEIGHT = 62;

const FIRST_ROW_Y = 529;
const CITIZEN_NO_COLUMN_X = 86;
const NAME_COLUMN_X = 256;
const SIGNATURE_COLUMN_X = 438;
const END_X = 552;

const TABLE_LINE_WIDTH = 1.7;

const FONT_SIZE = 10;
const LINE_HEIGHT = 14;
const TEXT_X_PADDING = 4;

export async function fill(signs: SignedPetition[]) {
	const docBuffer = await readFile('./resources/form.pdf');
	const doc = await PDFDocument.load(docBuffer);

	const fontBuffer = await readFile('./resources/Sarabun-Regular.ttf');
	doc.registerFontkit(fontkit);
	const font = await doc.embedFont(fontBuffer, { subset: true });

	for (let i = 0; i < signs.length; i += SIGNATURE_PER_PAGE) {
		if (i !== 0 && i % (100 * SIGNATURE_PER_PAGE) === 0) {
			console.log(`--- Filling page number ${i / SIGNATURE_PER_PAGE}...`);
		}
		const page = await fillPage(
			signs.slice(
				i,
				i + SIGNATURE_PER_PAGE <= signs.length
					? i + SIGNATURE_PER_PAGE
					: undefined,
			),
			{ doc, font },
		);
		doc.addPage(page);
	}

	doc.removePage(0);
	return doc.save();
}

async function fillPage(
	signs: SignedPetition[],
	{
		doc,
		font,
	}: {
		doc: PDFDocument;
		font: PDFFont;
	},
): Promise<PDFPage> {
	const [page] = await doc.copyPages(doc, [0]);
	const textHeight = font.heightAtSize(FONT_SIZE);

	for (let i = 0; i < signs.length; i++) {
		const sign = signs[i];
		const rowY = FIRST_ROW_Y - i * (ROW_HEIGHT + TABLE_LINE_WIDTH);

		page.moveTo(
			CITIZEN_NO_COLUMN_X + TEXT_X_PADDING,
			rowY + (ROW_HEIGHT - textHeight) / 2,
		);
		page.drawText(`${sign.personalid}`, {
			size: FONT_SIZE,
			lineHeight: LINE_HEIGHT,
			maxWidth: NAME_COLUMN_X - CITIZEN_NO_COLUMN_X - TEXT_X_PADDING * 2,
			font,
		});

		const nameFieldWidth =
			SIGNATURE_COLUMN_X - NAME_COLUMN_X - TEXT_X_PADDING * 2;
		const nameFontSize = findFontSizeThatFits(sign.name, nameFieldWidth, font);
		page.moveTo(
			NAME_COLUMN_X + TEXT_X_PADDING,
			rowY + ROW_HEIGHT / 2 - font.heightAtSize(nameFontSize) / 2,
		);
		page.drawText(sign.name, {
			size: nameFontSize,
			lineHeight: LINE_HEIGHT,
			maxWidth: nameFieldWidth,
			font,
		});

		const signature = await doc.embedPng(sign.signature);
		page.drawImage(signature, {
			width: END_X - SIGNATURE_COLUMN_X,
			height: ROW_HEIGHT,
			x: SIGNATURE_COLUMN_X,
			y: rowY,
		});
	}
	return page;
}

function findFontSizeThatFits(
	text: string,
	width: number,
	font: PDFFont,
): number {
	for (let i = FONT_SIZE; i > 0; i--) {
		if (width > font.widthOfTextAtSize(text, i)) {
			return i;
		}
	}
	return 1;
}
