<script lang="ts">
	export let header1: string;
	export let header2: string;
</script>

<div class="collapse collapse-plus border-base-300 bg-base-200">
	<input type="checkbox" class="peer" />
	<div class="collapse-title bg-primary text-primary-content text-left">
		<h2 class="heading-responsive-02 text-base-100">{header1}</h2>
		<h2 class="heading-responsive-02 text-secondary-focus">{header2}</h2>
	</div>
	<div class="collapse-content bg-primary text-primary-content">
		<slot />
	</div>
</div>
