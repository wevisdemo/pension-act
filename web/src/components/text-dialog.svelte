<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let isOpened = false;

	const emit = createEventDispatcher();
</script>

<div
	class="modal modal-bottom sm:modal-middle {isOpened
		? 'opacity-100 pointer-events-auto'
		: ''}"
>
	<div class="modal-box" class:translate-y-0={isOpened}>
		<p class="text-neutral py-4"><slot /></p>
		<div class="modal-action">
			<button class="btn" on:click={() => emit('close')}>ปิด</button>
		</div>
	</div>
</div>
