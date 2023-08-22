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
				<img src="/icons/pen.svg" alt="icon-pen" />
			</button>
		</a>
	</div>
</div>
