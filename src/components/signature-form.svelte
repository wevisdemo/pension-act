<script lang="ts">
	import { onMount } from 'svelte';
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import {
		object,
		string,
		length,
		toTrimmed,
		flatten,
		parse,
		ValiError,
	} from 'valibot';
	import SignaturePad from 'signature_pad';

	let signatureCanvas: HTMLCanvasElement;
	let signaturePad: SignaturePad;

	const formSchema = object({
		personalid: string([toTrimmed(), length(13, 'รหัสประชาชนต้องมี 13 หลัก')]),
		signature: string('กรุณาเซ็นชื่อ'),
	});

	const { form, setTouched, setData } = createForm({
		validate(values) {
			try {
				parse(formSchema, values);
			} catch (e) {
				return flatten(e as ValiError).nested;
			}
			return {};
		},
		onSubmit(values) {
			const data = parse(formSchema, values);
			console.log(data);
		},
		extend: reporter,
	});

	onMount(() => {
		signaturePad = new SignaturePad(signatureCanvas);
		signaturePad.addEventListener('endStroke', () => {
			setTouched('signature', true);
			setData('signature', signaturePad.toDataURL());
		});
	});

	function clearPad() {
		signaturePad.clear();
		setData('signature', undefined);
	}
</script>

<form use:form>
	<div class="form-control w-full max-w-xs">
		<ValidationMessage for="personalid" let:messages>
			<label class="label" for="personalid">
				<span class="label-text">เลขประจำตัวประชาชน*</span>
			</label>
			<input
				type="text"
				name="personalid"
				class="input input-bordered w-full max-w-xs {messages
					? 'input-error'
					: ''}"
			/>
			<div class="label">
				<span class="label-text-alt text-error">{messages || ''}</span>
			</div>
		</ValidationMessage>
	</div>

	<canvas bind:this={signatureCanvas} />
	<button type="button" class="btn" on:click={clearPad}>ลบ</button>

	<ValidationMessage for="signature" let:messages>
		<div class="label">
			<span class="label-text-alt text-error">{messages || ''}</span>
		</div>
	</ValidationMessage>
	<button type="submit" class="btn btn-primary">ลงชื่อเลย</button>
</form>
