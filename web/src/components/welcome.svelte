<script>
	import SocialGroup from './social-group.svelte';

	export let documentCount = 0;
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
			<span>"เสนอคำถามประชามติ</span>
			<span>สู่รัฐธรรมนูญใหม่"</span>
		</p>
	</div>
	<div class="text-center mt-[12px] md:mt-[0px] md:ml-[48px] grid gap-[12px]">
		<div>
			<h2 class="heading-responsive-02 text-base-100">ต้องการ 50,000 ชื่อ</h2>
		</div>
		<div
			class="rounded-full text-base-100 flex flex-row justify-center items-center space-x-2 bg-primary-focus h-12 body-01-normal"
		>
			<span class="mt-1">ลงชื่อแล้ว</span>
			<span class="heading-responsive-03"
				>{new Intl.NumberFormat('th-TH', {
					maximumSignificantDigits: 3,
				}).format(documentCount)}+</span
			>
		</div>
		<div class="body-01-normal text-base-100 opacity-50">
			อัปเดตข้อมูล {new Date().toLocaleDateString('TH-th', {
				dateStyle: 'medium',
			})}
		</div>
		<div class="mt-3">
			<a href="#petition" class="btn btn-block font-minimal text-[26px]">
				ลงชื่อเลย
				<img src="/icons/pen.svg" alt="icon-pen" />
			</a>
			<a
				href="/locations"
				class="btn btn-block btn-secondary font-minimal text-[26px] mt-[4px]"
			>
				ดูสถานที่ลงชื่อ
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z"
						fill="black"
					/>
				</svg>
			</a>
			<a
				href="#table-register"
				class="btn btn-block btn-secondary font-minimal text-[26px] mt-[4px]"
				>อาสาล่ารายชื่อ
				<img src="/icons/table.svg" alt="icon-table" />
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
