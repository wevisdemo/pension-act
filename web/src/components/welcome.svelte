<script>
	import SocialGroup from './social-group.svelte';

	export let documentCount = 0;
</script>

<div
	class="flex flex-col md:w-[85vw] md:max-w-[650px] space-y-[8px] justify-center items-center text-center"
>
	<img src="/logo.svg" alt="logo" class="md:max-w-[60px] max-w-[40px]" />
	<h3 class="heading-responsive-01 text-neutral">ร่วมลงชื่อเสนอกฎหมาย</h3>
	<h1
		class="heading-responsive-03 text-primary leading-[50px] md:leading-[62px]"
	>
		บำนาญพื้นฐานแห่งชาติ
	</h1>
	<p class="body-02-normal text-neutral">
		เปลี่ยนจาก<span class="text-secondary font-semibold"
			>เบี้ยยังชีพแบบรัฐสงเคราะห์</span
		>
		ให้เป็น<span class="text-primary ffont-semibold"
			>บำนาญถ้วนหน้าด้วยรัฐสวัสดิการ</span
		>
	</p>
	<img
		src="/welcome-image.svg"
		alt="welcome-img"
		class="md:max-w-[360px] max-w-[280px]"
	/>
	<p class="body-02-semibold text-neutral">เราต้องการอย่างน้อย 10,000 ชื่อ</p>
	<p class="highlight body-02-semibold text-primary flex items-center">
		ลงชื่อแล้ว<span class="heading-responsive-03 ml-[6px]">{documentCount}</span
		>
	</p>
	<p class="body-01-normal text-neutral opacity-50">
		อัปเดตข้อมูล {new Date().toLocaleDateString('TH-th', {
			dateStyle: 'medium',
		})}
	</p>
	<a
		href="#petition"
		class="btn btn-block bg-primary hover:bg-primary-focus text-body-03-semibold text-base-100 md:w-[85vw] md:max-w-[450px]"
	>
		ลงชื่อเลย
		<img src="/icons/pen.svg" alt="icon-pen" fill="#FFD3C9" />
	</a>
	<SocialGroup />
</div>

<style>
	.highlight {
		text-shadow: -4px -4px 3px white, 4px -4px 3px white, -4px 4px 3px white,
			4px 4px 3px white, -4px 0px 3px white, 4px 0px 3px white,
			0px -4px 3px white, 0px 4px 3px white;
	}
</style>
