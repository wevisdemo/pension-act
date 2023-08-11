<script lang="ts">
	import { onMount } from 'svelte';
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { flatten, parse, ValiError } from 'valibot';
	import SignaturePad from 'signature_pad';
	import { documentSchema } from '../models/document';
	import { submitDocument } from '../utils/firebase';

	let signatureCanvas: HTMLCanvasElement;
	let signaturePad: SignaturePad;

	const { form, setTouched, setData, data } = createForm({
		validate(values) {
			try {
				parse(documentSchema, values);
			} catch (e) {
				return flatten(e as ValiError).nested;
			}
			return {};
		},
		async onSubmit(values) {
			try {
				await submitDocument(parse(documentSchema, values));
			} catch (e) {
				alert(e);
			}
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
	<div class="form-control w-full">
		<ValidationMessage for="personalid" let:messages>
			<label class="label" for="personalid">
				<span class="label-text font-bold">เลขประจำตัวประชาชน*</span>
			</label>
			<input
				type="string"
				name="personalid"
				class="input input-bordered {messages ? 'input-error' : ''}"
			/>
			<div class="label">
				<span class="label-text-alt {messages ? 'text-error' : ''}"
					>ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค</span
				>
			</div>
		</ValidationMessage>

		<div class="flex flex-row justify-between">
			<div>
				<label class="label" for="prefix">
					<span class="label-text font-bold">คำนำหน้า</span>
				</label>
				<select class="select select-bordered w-full max-w-xs" name="prefix">
					<option selected />
					<option>นาย</option>
					<option>นาง</option>
					<option>นางสาว</option>
				</select>
			</div>
			<div class="flex-1">
				<ValidationMessage for="firstname" let:messages>
					<label class="label" for="firstname">
						<span class="label-text font-bold">ชื่อ*</span>
					</label>
					<input
						type="text"
						name="firstname"
						class="input input-bordered {messages ? 'input-error' : ''}"
					/>
					<div class="label">
						<span class="label-text-alt {messages ? 'text-error' : ''}"
							>ระบุชื่อจริงเป็นภาษาไทย</span
						>
					</div>
				</ValidationMessage>
			</div>
		</div>

		<ValidationMessage for="lastname" let:messages>
			<label class="label" for="lastname">
				<span class="label-text font-bold">นามสกุล*</span>
			</label>
			<input
				type="text"
				name="lastname"
				class="input input-bordered {messages ? 'input-error' : ''}"
			/>
			<div class="label">
				<span class="label-text-alt {messages ? 'text-error' : ''}"
					>ระบุนามสกุลเป็นภาษาไทย</span
				>
			</div>
		</ValidationMessage>
	</div>

	<div class="label">
		<span class="label-text font-bold">ลงลายมือชื่อ*</span>
	</div>
	<canvas bind:this={signatureCanvas} />
	<button type="button" class="btn" on:click={clearPad}>ลบ</button>
	<ValidationMessage for="signature" let:messages>
		<div class="label">
			<span class="label-text-alt text-error">{messages || ''}</span>
		</div>
	</ValidationMessage>

	<label class="label cursor-pointer space-x-2">
		<input type="checkbox" name="consent" class="checkbox checkbox-primary" />
		<span class="label-text"
			>ข้าพเจ้ายินยอมลงชื่อเสนอกฎหมาย อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคล</span
		>
	</label>

	<button type="submit" class="btn btn-primary" disabled={!$data.consent}
		>ลงชื่อเลย</button
	>
</form>
