import { readFile } from 'fs/promises';
import { PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { SignedPetition } from '.';

type FillingBox = { x: number, y: number, maxWidth?: number };

const FONT_SIZE = 10;
const LINE_HEIGHT = 14;
const CITIZEN_ID_FONT_SIZE = 22;
const CITIZEN_ID_LINE_HEIGHT = 30;

const LOCATION_POSITION: FillingBox = { x: 375, y: 668, maxWidth: 160 };
const DAY_POSITION: FillingBox = { x: 317, y: 647 };
const MONTH_POSITION: FillingBox = { x: 376, y: 647, maxWidth: 83 };
const YEAR_POSITION: FillingBox = { x: 496, y: 647 };

const NAME_POSITION: FillingBox = { x: 229, y: 594, maxWidth: 290 };
const CITIZEN_ID_POSITION: FillingBox = { x: 223, y: 540 };
const CITIZEN_ID_DASH_WIDTH = 6.5;
const CITIZEN_ID_DIGIT_WIDTH = 22;

const SIGNATURE_POSITION: FillingBox = { x: 325, y: 390 };
const SIGNATURE_NAME_POSITION: FillingBox = { x: 318, y: 374, maxWidth: 120 };

const MONTHS = [
	'มกราคม',
	'กุมภาพันธ์',
	'มีนาคม',
	'เมษายน',
	'พฤษภาคม',
	'มิถุนายน',
	'กรกฏาคม',
	'สิงหาคม',
	'กันยายน',
	'ตุลาคม',
	'พฤศจิกายน',
	'ธันวาคม'
];

export async function fill(signs: SignedPetition[]) {
	const docBuffer = await readFile('./resources/petition-form.pdf');
	const doc = await PDFDocument.load(docBuffer);

	const fontBuffer = await readFile('./resources/Sarabun-Regular.ttf');
	doc.registerFontkit(fontkit);
	const font = await doc.embedFont(fontBuffer, { subset: true });

	for (let i = 0; i < signs.length; i++) {
		if (i !== 0 && i % 100 === 0) {
			console.log(`--- Filling page number ${i}...`);
		}
		const page = await fillPage(
			signs[i],
			{ doc, font },
		);
		doc.addPage(page);
	}

	doc.removePage(0);
	return doc.save();
}

async function fillPage(
	sign: SignedPetition,
	{
		doc,
		font,
	}: {
		doc: PDFDocument;
		font: PDFFont;
	},
): Promise<PDFPage> {
	const [page] = await doc.copyPages(doc, [0]);

	// Fill in locaiton
	page.moveTo(
		LOCATION_POSITION.x, LOCATION_POSITION.y
	);
	const locaitonFontSize = findFontSizeThatFits(sign.location, LOCATION_POSITION.maxWidth || 0, font);
	page.drawText(sign.location, {
		size: locaitonFontSize,
		lineHeight: LINE_HEIGHT,
		maxWidth: LOCATION_POSITION.maxWidth,
		font,
	});

	// Fill in date
	const dateElements = sign.date.split('/');
	page.moveTo(
		DAY_POSITION.x, DAY_POSITION.y
	);
	page.drawText(`${dateElements[0]}`, {
		size: FONT_SIZE,
		lineHeight: LINE_HEIGHT,
		font,
	});
	page.moveTo(
		MONTH_POSITION.x, MONTH_POSITION.y
	);
	page.drawText(`${MONTHS[Number(dateElements[1]) - 1]}`, {
		size: FONT_SIZE,
		lineHeight: LINE_HEIGHT,
		maxWidth: MONTH_POSITION.maxWidth,
		font,
		
	});
	page.moveTo(
		YEAR_POSITION.x, YEAR_POSITION.y
	);
	page.drawText(`${dateElements[2]}`, {
		size: FONT_SIZE,
		lineHeight: LINE_HEIGHT,
		font,
	});

	// Fill name
	page.moveTo(
		NAME_POSITION.x, NAME_POSITION.y
	);
	const nameFontSize = findFontSizeThatFits(sign.name, NAME_POSITION.maxWidth || 0, font);
	page.drawText(sign.name, {
		size: nameFontSize,
		lineHeight: LINE_HEIGHT,
		maxWidth: NAME_POSITION.maxWidth,
		font,
	});

	// Fill citizen ID
	page.moveTo(
		CITIZEN_ID_POSITION.x, CITIZEN_ID_POSITION.y
	);
	const e = sign.personalid.split('');
	for (let i = 0; i < 13; i++) {
		page.drawText(e[i], {
			size: CITIZEN_ID_FONT_SIZE,
			lineHeight: CITIZEN_ID_LINE_HEIGHT,
			font,
		});
		if ([0, 4, 9, 11].includes(i)) {
			page.moveRight(CITIZEN_ID_DIGIT_WIDTH + CITIZEN_ID_DASH_WIDTH);
		} else {
			page.moveRight(CITIZEN_ID_DIGIT_WIDTH);
		}
	}

	// Fill signature
	const signature = await doc.embedPng(sign.signature);
	const {width: signatureFitWidth, height: signatureFitHeight} = signature.scaleToFit(100, 50);
	page.drawImage(signature, {
		width: signatureFitWidth,
		height: signatureFitHeight,
		x: SIGNATURE_POSITION.x,
		y: SIGNATURE_POSITION.y,
	});

	// Fill signature name
	page.moveTo(
		SIGNATURE_NAME_POSITION.x, SIGNATURE_NAME_POSITION.y
	);
	const signatureNameFontSize = findFontSizeThatFits(sign.name, SIGNATURE_NAME_POSITION.maxWidth || 0, font);
	page.drawText(sign.name, {
		size: signatureNameFontSize,
		lineHeight: LINE_HEIGHT,
		maxWidth: SIGNATURE_NAME_POSITION.maxWidth,
		font,
	});

	return page;
}

function findFontSizeThatFits(
	text: string,
	width: number,
	font: PDFFont,
): number {
	for (let i = FONT_SIZE; i > 0; i -= 0.5) {
		if (width > font.widthOfTextAtSize(text, i)) {
			return i;
		}
	}
	return 1;
}

