<script lang="ts"></script>

<div
	class="body-02-normal grid grid-row-1 gap-[20px] md:py-[60px] py-[40px] text-center justify-items-center"
>
	<h2 class="heading-responsive-02">รู้จักเรา</h2>
	<p class="body-03-semibold">
		“เครือข่ายประชาชนเพื่อรัฐสวัสดิการ” (Welfare Watch Network)
	</p>
	<img src="/logo-with-text.svg" alt="logo-with-text" />
	<div class="flex flex-col space-y-[10px]">
		<p>
			เคยได้ยินเรื่อง <span class="font-semibold">“บำนาญแห่งชาติ”</span> กันไหม?
			เงินรายเดือนที่ปรับจากเบี้ยยังชีพ 600 – 1,000 บาท มาเป็น 3,000 บาทให้กับผู้สูงอายุทุกคน
			เพื่อเป็นหลักประกันรายได้ตอนสูงวัย แบบที่เพียงพอต่อการใช้ชีวิต
		</p>
		<p>
			<span class="font-semibold">“เปลี่ยนเบี้ยยังชีพเป็นบำนาญถ้วนหน้า”</span>
			คือหนึ่งในแคมเปญที่ เครือข่ายประชาชนเพื่อรัฐสวัสดิการ ริเริ่มจากการทำงานของเครือข่ายประชาชนหลายภาคส่วนมารวมตัวกันขับเคลื่อน
			เปลี่ยนรัฐสงเคราะห์เป็นรัฐสวัสดิการ บนหลักการ
			<span class="font-semibold"
				>"ถ้วนหน้าครอบคลุมทุกคน
				เพียงพอต่อการดำรงชีพอย่างสมศักดิ์ศรีความเป็นมนุษย์
				โดยอิงตามเส้นความยากจนที่ปรับทุก 3 ปี และยั่งยืน
				โดยมีกฎหมายบำนาญแห่งชาติมารองรับ”</span
			>
		</p>
		<p>
			ก่อนหน้านี้ เครือข่ายประชาชนเพื่อรัฐสวัสดิการ
			รวบรวมรายชื่อประชาชนที่เห็นด้วยเสนอกฎหมายไปยังสภา แต่นายกฯ “ประยุทธ์”
			ปัดตกกฎหมาย โดยไม่มีเหตุผล ฟากฝั่งราชการที่ให้ความเห็นก็บอกว่า <span
				>“เป็นภาระงบประมาณ ภาระประเทศ”</span
			> แต่เรายังไม่ยอมแพ้ แม้กฎหมายจะถูกปัดตก เรายังคงผลักดันให้ทุกคนบนประเทศนี้มี
			“บำนาญแห่งชาติ” ให้ได้
		</p>
		<p>
			สนใจร่วมขับเคลื่อน “บำนาญแห่งชาติ” ไปด้วยกันกับเรา เพื่อพ่อแม่
			พี่ป้าน้าอาของเรา และตัวเรา ติดตาม FB แฟนเพจ: <a
				class="underline"
				href="https://www.facebook.com/pension4all"
				target="_blank">บำนาญแห่งชาติ</a
			>
		</p>
	</div>
	<div class="space-y-[10px]">
		<p class="body-03-semibold">Partners</p>
		<div class="flex flex-wrap justify-center [&>*:not(:first-child)]:mr-[8px]">
			{#each { length: 10 } as _, i}
				<img src={`/partners/partner-${i + 1}.svg`} alt={`partner-${i + 1}`} />
			{/each}
		</div>
	</div>
</div>

<style></style>
