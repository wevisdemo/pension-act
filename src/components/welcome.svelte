<script lang="ts">
	import SocialGroup from './social-group.svelte';
</script>

<div class="flex flex-col md:flex-row">
	<div>
		<img
			class="w-[180px] md:w-[280px] max-w-[280px] m-auto"
			src="/campaign-logo.svg"
			alt="campaign-logo"
		/>
		<p
			class="heading-responsive-01 text-info flex flex-col justify-center items-center"
		>
			<span> “เสนอคำถามประชามติ </span>
			<span> สู่รัฐธรรมนูญใหม่” </span>
		</p>
	</div>
	<div class="text-center mt-[12px] md:mt-[0px] md:ml-[48px] grid gap-[12px]">
		<div>
			<h2 class="heading-responsive-02 text-base-100">ต้องการ 50,000 ชื่อ</h2>
		</div>
		<div>
			<a href="#petition">
				<button class="btn btn-block font-minimal text-[26px]"
					>ลงชื่อเลย
					<img src="/icons/pen.svg" alt="icon-pen" />
				</button>
			</a>
			<a href="#table-register">
				<button
					class="btn btn-block btn-secondary font-minimal text-[26px] mt-[4px]"
					>อาสาตั้งโต๊ะเข้าชื่อ
					<img src="/icons/table.svg" alt="icon-table" />
				</button>
			</a>
		</div>
		<a
			class="text-decoration-line: underline font-minimal text-[26px] text-info"
			href="#event-reasons">ทำไมต้องลงชื่อ</a
		>
		<SocialGroup />
	</div>
</div>

<style>
	@keyframes shadow-pulse {
		100% {
			text-shadow: 0px 0px 6px 0px #ffffff;
		}
	}
</style>
