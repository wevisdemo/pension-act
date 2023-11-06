<script lang="ts">
	import Card from './card.svelte';
	import type { CardData } from './shared';
	interface MainTopic {
		image: string;
		highlightText: string;
		text: string;
	}

	const reasonsForEdition: MainTopic[] = [
		// same struct but doesn't have image
		{
			image: '',
			highlightText: 'เพราะการสงเคราะห์ ≠ สิทธิ์พื้นฐาน',
			text: 'กฎหมายเดิมยังมีหลักการแนวคิดการจ่ายเงินสนับสนุนผู้สูงอายุ เป็นลักษณะเบี้ยยังชีพที่ยังมีเบื้องหลังความเชื่อในลักษณะสงเคราะห์ที่ไม่ใช่สิทธิ์พื้นฐาน',
		},
		{
			image: '',
			highlightText: 'เพราะไม่ระบุจำนวนเงิน',
			text: 'กฎหมายเดิมไม่มีการระบุอัตราการจ่าย ส่งผลให้สามารถเปลี่ยนแปลงจำนวนเงินในการจ่ายตามนโยบายรัฐบาลปัจจุบันมีการจ่าย “เบี้ยยังชีพ” ให้คนที่อายุ 60 ปีขึ้นไป จำนวน 600 ,700, 800 และ 1,000 บาทตามอายุ ซึ่งไม่เพียงพอต่อการดำรงชีวิต',
		},
		{
			image: '',
			highlightText: 'เพราะไม่กำหนดเกณฑ์การจ่ายที่ชัดเจน',
			text: 'แม้ว่าปัจจุบันมีการจ่ายถ้วนหน้าให้ผู้สูงวัยทุกคน แต่เนื่องจากไม่มีกฎหมายกำหนดความชัดเจนว่าควรมีเกณฑ์การจ่ายอย่างไร แต่ละปีจึงขึ้นอยู่กับหน่วยงานรัฐว่าจะเสนอเปลี่ยนแปลงเกณฑ์หรือไม่ เช่น เปลี่ยนจากให้ถ้วนหน้าเป็นเลือกให้บางกลุ่มเท่านั้นเป็นต้น',
		},
	];
	const mainTopics: MainTopic[] = [
		{
			image: '/event-1.svg',
			highlightText: 'เปลี่ยนแนวคิด',
			text: 'ของการสร้างหลักประกันรายได้ของผู้สูงอายุจากการสงเคราะห์เป็นการให้แบบถ้วนหน้าอย่างสมศักดิ์ศรี ด้วยการเปลี่ยนเบี้ยยังชีพให้เป็นบำนาญพื้นฐานถ้วนหน้า',
		},
		{
			image: '/event-2.svg',
			highlightText: 'ใช้หลักเกณฑ์เดียว',
			text: 'คือจ่ายบำนาญให้ทุกคนเมื่อมีอายุครบ 60 ปี โดยไม่มีเงื่อนไข',
		},
		{
			image: '/event-3.svg',
			highlightText: 'กำหนดอัตราการจ่าย',
			text: ' ที่ใช้เกณฑ์เส้นความยากจน มีการกำหนดให้พิจารณาเกณฑ์ทุก 3 ปี โดยภาคประชาชนเสนอ 3,000 บาทถ้วนหน้า',
		},
		{
			image: '/event-4.svg',
			highlightText: 'จัดการระบบบำนาญพื้นฐานถ้วนหน้าในรูปแบบกองทุน',
			text: ' ที่มีการบริหารจัดการอย่างเป็นมืออาชีพ ทั้งการดูแลเงินในกองทุนและการหารายได้เพิ่มเพื่อความยั่งยืน',
		},
		{
			image: '/event-5.svg',
			highlightText: 'มีการกำหนดแหล่งที่มาของรายได้กองทุน',
			text: ' ผ่านการจัดเก็บภาษี ทั้งระบบภาษีที่มีอยู่เดิม ที่ยังจัดเก็บได้อย่างไม่มีประสิทธิภาพ ด้วยการเพิ่มประสิทธิภาพการจัดเก็บ และนำมาเข้ากองทุนบำนาญเฉพาะ รวมทั้งเสนอให้มีการจัดเก็บภาษี ที่ยังไม่มีการเก็บอย่างชัดเจน เช่นภาษีความมั่งคั่งเป็นต้น',
		},
	];

	const cardDatas: CardData[] = [
		{
			theme: 'primary',
			image: '/elder-smile.svg',
			title: 'ถ้ามี “บำนาญ พื้นฐานถ้วนหน้า”',
			textList: [
				'ทำให้ผู้สูงอายุมีรายได้ที่แน่นอนทุกเดือน',
				'ผู้สูงอายุวางแผนชีวิตระยะยาวได้ ว่าจะนำเงินที่ได้รับอย่างสม่ำเสมอไปทำอะไร เช่น ลงทุนค้าขาย ซ่อมแซมที่พักอาศัย เป็นต้น',
				'กระตุ้นเศรษฐกิจจากการจับจ่ายใช้สอยของผู้สูงอายุ',
				'ลดภาระการพึ่งพิงลูกหลานด้านค่าใช้จ่ายจำนวนหนึ่ง',
				'ลดความเหลื่อมล้ำในสังคม เพิ่มศักดิ์ศรีความเป็นมนุษย์ และช่วยตัดวงจรความยากจนเรื้อรัง',
			],
		},
		{
			theme: 'secondary',
			image: '/elder-sad.svg',
			title: 'ถ้าไม่มี “บำนาญถ้วนหน้า” หรือให้บำนาญเฉพาะกลุ่ม',
			textList: [
				'ผู้สูงอายุส่วนใหญ่จะมีชีวิตความเป็นอยู่ลำบาก อาจต้องอดมื้อกินมื้อเพราะไม่มีเงินออม และต้องพึ่งพิงเงินจากรัฐ',
				'ลูกหลานมีภาระมากขึ้นในการดูแลผู้สูงอายุ',
				'เกิดชนชั้นในสังคม แบ่งแยกคนรวยคนจน',
				'วงจรความยากจนเรื้อรังส่งต่อจากรุ่นพ่อแม่สู่รุ่นลูก',
			],
		},
	];
</script>

<div
	class="md:w-[85vw] md:max-w-[1040px] text-center items-center text-sm py-[0px] x-[20px]"
>
	<div class="w-full md:py-[60px] py-[40px]">
		<h2 class="heading-responsive-02 text-base-100">
			หลักการสำคัญ ของกฎหมายฉบับนี้
		</h2>
		<div
			class="w-full flex flex-wrap justify-center md:space-x-[20px] mb-[20px]"
		>
			{#each mainTopics as topic, i}
				<div
					class="md:w-[85vw] max-w-[320px] flex flex-col items-center mt-[20px]"
				>
					<img class="w-[120px]" src={topic.image} alt={`main-topic-${i}`} />
					<p class="text-body-02-normal text-base-100 mt-[10px]">
						<span class="text-primary font-semibold">{topic.highlightText}</span
						>
						<span>{topic.text}</span>
					</p>
				</div>
			{/each}
		</div>
		<a
			class="text-info underline"
			href="https://drive.google.com/file/d/1--lU5QBoSqnD_uzcGeK6tJFNB5Bc0uGY/view?usp=sharing"
			target="_blank">อ่านร่างกฏหมายฉบับเต็ม</a
		>
	</div>
	<div class="w-full md:py-[60px] py-[40px]">
		<h2 class="heading-responsive-02 text-base-100">
			ทำไมต้องแก้กฎหมายผู้สูงอายุเดิม
		</h2>
		<div class="w-full flex flex-wrap justify-center space-x-[20px]">
			{#each reasonsForEdition as reason, i}
				<div
					class="md:w-[85vw] max-w-[320px] flex flex-col mt-[20px] text-body-02-normal"
				>
					<p class="font-semibold text-primary">
						{reason.highlightText}
					</p>
					<p class="text-base-100">
						{reason.text}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="w-full md:py-[60px] py-[40px] flex flex-col md:flex-row justify-between items-center md:space-x-[20px] md:space-y-[0px] space-y-[40px]"
	>
		{#each cardDatas as cardData}
			<Card data={cardData} />
		{/each}
	</div>
</div>
