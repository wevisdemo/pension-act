<script lang="ts">
	import { onMount } from 'svelte';

	export let url: string = '';
	let encodedURL = '';

	onMount(() => {
		encodedURL = encodeURIComponent(url || window.location.href);
	});
</script>

<div class="flex [&>*:not(:first-child)]:ml-[4px] justify-center">
	<a
		href={`http://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
		target="_blank"
	>
		<img src="/facebook-logo.svg" alt="facebook-logo" />
	</a>
	<a
		href={`https://twitter.com/intent/tweet?url=${encodedURL}`}
		target="_blank"
	>
		<img src="/x-logo.svg" alt="x-logo" />
	</a>
	<a
		href={`https://social-plugins.line.me/lineit/share?url=${encodedURL}`}
		target="_blank"><img src="/line-logo.svg" alt="line-logo" /></a
	>
</div>

<style></style>
