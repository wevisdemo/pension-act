<script lang="ts">
	import SocialGroup from './social-group.svelte';
</script>

<div
	class="w-full max-w-[864px] flex justify-between items-center h-[60px] md:h-[80px] p-[18px]"
>
	<div class="flex items-center">
		<span class="hidden md:block text-base-100 heading-03 mr-[12px]"
			>แชร์ให้เพื่อน</span
		>
		<SocialGroup url="https://conforall.com" />
	</div>
	<div class="max-w-[158px] md:max-w-[240px] flex-1">
		<a href="/locations">
			<button class="btn btn-block heading-03 font-bold"
				>ดูสถานที่ลงชื่อ
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
			</button>
		</a>
	</div>
</div>
