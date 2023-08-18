<script lang="ts">
	const PROD_URL = encodeURI('https://conforall.com');
</script>

<div class="flex [&>*:not(:first-child)]:ml-[4px] justify-center">
	<a
		href={`http://www.facebook.com/sharer/sharer.php?u=${PROD_URL}`}
		target="_blank"
	>
		<img src="/facebook-logo.svg" alt="facebook-logo" />
	</a>
	<a href={`https://twitter.com/intent/tweet?url=${PROD_URL}`} target="_blank">
		<img src="/x-logo.svg" alt="x-logo" />
	</a>
	<a
		href={`https://social-plugins.line.me/lineit/share?url=${PROD_URL}`}
		target="_blank"><img src="/line-logo.svg" alt="line-logo" /></a
	>
</div>
