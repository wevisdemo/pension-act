import { csv } from 'd3-fetch';

interface Location {
	name: string;
	province: string;
	address: string;
	mapLink: string;
	openingTime: string;
	phone: string;
}

const LOCATION_SHEET_ID = '1ZfRfEK1b5PrePiefHsvJXqQDLmVD5jSJKyYoYwwKBnM';
const LOCATION_SHEET_NAME = 'Form Responses 1';

const locationUrl = encodeURI(
	`https://docs.google.com/spreadsheets/d/${LOCATION_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${LOCATION_SHEET_NAME}`,
);

export const fetchLocations = async () =>
	csv(
		locationUrl,
		(d) =>
			({
				name: d['2. ชื่อสถานที่ตั้งจุดตั้งโต๊ะ'],
				province: d['3. จังหวัดของสถานที่จุดตั้งโต๊ะ'],
				address: d['4. ที่อยู่จุดตั้งโต๊ะ'],
				mapLink: d['5. Link สถานที่ตั้งจุดตั้งโต๊ะจาก Google Map'],
				openingTime: d['6. วันและเวลาที่เปิด'],
				phone:
					d['7. เบอร์โทรศัพท์ สำหรับคนทั่วไปโทรสอบถามการเดินทางเพื่อไปลงชื่อ'],
			}) as Location,
	);
