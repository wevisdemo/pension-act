<script lang="ts">
	import type { CardData } from './shared';

	export let data: CardData;

	const getTitleColor = (theme: string) => {
		switch (theme) {
			case 'primary':
				return 'text-primary';
			case 'secondary':
				return 'text-info';
			default:
				return 'text-primary';
		}
	};

	const getBGColor = (theme: string) => {
		switch (theme) {
			case 'primary':
				return 'bg-base-200';
			case 'secondary':
				return 'bg-secondary';
			default:
				return 'bg-base-200';
		}
	};

	const getTextColor = (theme: string) => {
		switch (theme) {
			case 'primary':
				return 'text-neutral';
			case 'secondary':
				return 'text-base-100';
			default:
				return 'text-neutral';
		}
	};

	const boxClass = `${getBGColor(data.theme)} ${getTextColor(
		data.theme
	)} text-left space-y-[8px] relative max-w-[490px] p-[20px] rounded-[8px]`;
</script>

<div class={boxClass}>
	<img
		class="w-[60px] absolute top-[-20px] right-[0px]"
		src={data.image}
		alt={`image-elder`}
	/>
	<p class={`body-02-semibold ${getTitleColor(data.theme)}`}>จะเกิดอะไรขึ้น</p>
	<h3 class={`heading-responsive-01 ${getTitleColor(data.theme)}`}>
		{data.title}
	</h3>
	<ul class="list-decimal list-inside">
		{#each data.textList as text}
			<li class="body-02-normal">{text}</li>
		{/each}
	</ul>
</div>

<style></style>
