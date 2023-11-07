<script lang="ts">
	import { onMount } from 'svelte';
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { date, flatten, parse, ValiError } from 'valibot';
	import SignaturePad from 'signature_pad';
	import { documentSchema } from '@pension-act/models';
	import { submitDocument } from '../utils/firebase';

	let signatureCanvas: HTMLCanvasElement;
	let signaturePad: SignaturePad;
	let successDialog: HTMLDialogElement;
	let errorDialog: HTMLDialogElement;
	let signatureEnabled = false;
	let isLoading = false;
	const canvasResizeObserver = new ResizeObserver((entries) => {
		signatureCanvas.width = entries[0].target.clientWidth;
		signatureCanvas.height = entries[0].target.clientHeight;
		signaturePad.fromData(signaturePad.toData());
	});

	let dayOptions = [...Array.from({ length: 31 }, (_, i) => i + 1)];

	let monthOptions = [...Array.from({ length: 12 }, (_, i) => i + 1)];

	let yearOptions = [
		...Array.from(
			{ length: 100 },
			(_, i) => new Date().getFullYear() - i + 543
		),
	];

	const thisDate = new Date();

	let dateValue = {
		day: thisDate.getDate(),
		month: thisDate.getMonth() + 1,
		year: thisDate.getFullYear() + 543,
	};

	const setDateOptions = () => {
		if (dateValue.month === 2) {
			if (dateValue.year % 4 === 0) {
				dayOptions = [...Array.from({ length: 29 }, (_, i) => i + 1)];
			} else {
				dayOptions = [...Array.from({ length: 28 }, (_, i) => i + 1)];
			}
		} else if ([4, 6, 9, 11].includes(dateValue.month)) {
			dayOptions = [...Array.from({ length: 30 }, (_, i) => i + 1)];
		} else {
			dayOptions = [...Array.from({ length: 31 }, (_, i) => i + 1)];
		}
		if (!dayOptions.includes(dateValue.day)) {
			dateValue.day = dayOptions[dayOptions.length - 1];
		}
	};

	$: dateValue, setDateOptions();

	const { form, setTouched, setData, data, reset } = createForm({
		validate(values) {
			try {
				values.day = dateValue.day.toString();
				values.month = dateValue.month.toString();
				values.year = dateValue.year.toString();
				parse(documentSchema, values);
			} catch (e) {
				return flatten(e as ValiError).nested;
			}
			return {};
		},
		async onSubmit(values) {
			isLoading = true;
			try {
				values.day = dateValue.day.toString();
				values.month = dateValue.month.toString();
				values.year = dateValue.year.toString();
				console.log(values);
				await submitDocument(parse(documentSchema, values));
				successDialog.showModal();
				clearPad();
				reset();
			} catch (e) {
				console.log(e);
				errorDialog.showModal();
			}
			isLoading = false;
		},
		extend: reporter,
	});

	onMount(() => {
		signaturePad = new SignaturePad(signatureCanvas);
		signaturePad.addEventListener('endStroke', () => {
			setTouched('signature', true);
			setData('signature', signaturePad.toDataURL());
		});
		canvasResizeObserver.observe(signatureCanvas);
	});

	function clearPad() {
		signaturePad.clear();
		setData('signature', undefined);
	}
</script>

<form use:form>
	<div class="form-control w-full text-neutral">
		<ValidationMessage for="location" let:messages>
			<label class="label" for="location">
				<span class="label-text heading-03">เขียนที่*</span>
			</label>
			<input
				type="string"
				name="location"
				class="input rounded-sm bg-base-200 {messages ? 'input-error' : ''}"
				disabled={isLoading}
			/>
			<div class="label">
				<span
					class="label-text-alt {messages
						? 'text-error'
						: 'text-neutral opacity-[60%]'}"
					>ระบุสถานที่กรอกข้อมูลเช่น จังหวัด</span
				>
			</div>
		</ValidationMessage>
		<div class="flex flex-row space-x-[10px]">
			<div class="form-control">
				<ValidationMessage for="day" let:messages>
					<label class="label" for="day">
						<span class="label-text heading-03">วันที่ลงชื่อ*</span>
					</label>
					<select
						class="select rounded-sm max-w-xs bg-base-200 {messages
							? 'input-error'
							: ''}"
						disabled={isLoading}
						bind:value={dateValue.day}
						name="day"
					>
						{#each dayOptions as day}
							<option selected={day === thisDate.getDate()}>{day}</option>
						{/each}
					</select>
				</ValidationMessage>
			</div>
			<div class="flex flex-row space-x-[10px]">
				<div class="form-control">
					<ValidationMessage for="month" let:messages>
						<label class="label" for="month">
							<span class="label-text heading-03">เดือน*</span>
						</label>
						<select
							class="select rounded-sm max-w-xs bg-base-200 {messages
								? 'input-error'
								: ''}"
							disabled={isLoading}
							name="month"
							bind:value={dateValue.month}
						>
							{#each monthOptions as month}
								<option selected={month === thisDate.getMonth() + 1}
									>{month}</option
								>
							{/each}
						</select>
					</ValidationMessage>
				</div>
			</div>
			<div class="flex flex-row space-x-[10px]">
				<div class="form-control">
					<ValidationMessage for="year" let:messages>
						<label class="label" for="year">
							<span class="label-text heading-03"> ปีพ.ศ.*</span>
						</label>
						<select
							class="select rounded-sm max-w-xs bg-base-200 {messages
								? 'input-error'
								: ''}"
							disabled={isLoading}
							name="year"
							bind:value={dateValue.year}
						>
							{#each yearOptions as year}
								<option selected={year === thisDate.getFullYear()}
									>{year}</option
								>
							{/each}
						</select>
					</ValidationMessage>
				</div>
			</div>
		</div>
		<ValidationMessage for="personalid" let:messages>
			<label class="label" for="personalid">
				<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>
			</label>
			<input
				type="string"
				name="personalid"
				class="input rounded-sm bg-base-200 {messages ? 'input-error' : ''}"
				disabled={isLoading}
			/>
			<div class="label">
				<span
					class="label-text-alt {messages
						? 'text-error'
						: 'text-neutral opacity-[60%]'}"
					>ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค</span
				>
			</div>
		</ValidationMessage>
		<div class="flex flex-row space-x-[10px]">
			<div class="form-control">
				<label class="label" for="prefix">
					<span class="label-text heading-03">คำนำหน้า</span>
				</label>
				<select
					class="select rounded-sm max-w-xs bg-base-200"
					disabled={isLoading}
					name="prefix"
				>
					<option selected />
					<option>นาย</option>
					<option>นาง</option>
					<option>นางสาว</option>
				</select>
			</div>
			<div class="form-control flex-1">
				<ValidationMessage for="firstname" let:messages>
					<label class="label" for="firstname">
						<span class="label-text heading-03">ชื่อ*</span>
					</label>
					<input
						type="text"
						name="firstname"
						class="input rounded-sm bg-base-200 w-full {messages
							? 'input-error'
							: ''}"
						disabled={isLoading}
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
				<span class="label-text heading-03">นามสกุล*</span>
			</label>
			<input
				type="text"
				name="lastname"
				class="input rounded-sm bg-base-200 {messages ? 'input-error' : ''}"
				disabled={isLoading}
			/>
			<div class="label">
				<span
					class="label-text-alt {messages
						? 'text-error'
						: 'text-neutral opacity-[60%]'}">ระบุนามสกุลเป็นภาษาไทย</span
				>
			</div>
		</ValidationMessage>
		<ValidationMessage for="email" let:messages>
			<label class="label" for="email">
				<span class="label-text heading-03">อีเมล (Optional)</span>
			</label>
			<input
				type="text"
				name="email"
				class="input rounded-sm bg-base-200 {messages ? 'input-error' : ''}"
				disabled={isLoading}
			/>
			<div class="label">
				<span
					class="label-text-alt {messages
						? 'text-error'
						: 'text-neutral opacity-[60%]'}"
				>
					E-mail ที่ใช้งานในปัจจุบัน - สำหรับรับเอกสารยืนยันการลงลายมือชื่อ</span
				>
			</div>
		</ValidationMessage>
		<ValidationMessage for="phone" let:messages>
			<label class="label" for="phone">
				<span class="label-text heading-03">เบอร์โทรศัพท์ (Optional)</span>
			</label>
			<input
				type="text"
				name="phone"
				class="input rounded-sm bg-base-200 {messages ? 'input-error' : ''}"
				disabled={isLoading}
			/>
			<div class="label">
				<span
					class="label-text-alt {messages
						? 'text-error'
						: 'text-neutral opacity-[60%]'}"
				>
					ระบุเบอร์โทรศัพท์ที่ใช้งานในปัจจุบันสำหรับการอ้างอิง
					ข้อมูลจะเก็บเป็นความลับ</span
				>
			</div>
		</ValidationMessage>

		<div class="form-control">
			<div class="label">
				<span class="label-text heading-03">ลงลายมือชื่อ*</span>
			</div>
			<div class="relative">
				<canvas
					class="bg-base-200 h-[258px] w-full rounded-sm {!signatureEnabled ||
					isLoading
						? 'pointer-events-none'
						: ''}"
					bind:this={signatureCanvas}
				/>
				{#if signatureEnabled}
					<button
						type="button"
						class="btn btn-outline btn-accent absolute right-[10px] bottom-4"
						on:click={clearPad}
					>
						ล้าง
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<rect
								width="16"
								height="16"
								fill="transparent"
								style="mix-blend-mode:multiply"
							/>
							<path
								d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z"
								fill="#8054FF"
							/>
						</svg>
					</button>
				{:else}
					<div
						class="absolute w-full h-full flex justify-center items-center top-0 left-0"
					>
						<button
							type="button"
							class="btn bg-base-100 heading-03 shadow-xl"
							on:click={() => (signatureEnabled = true)}
						>
							คลิกเพื่อกรอกลายเซ็น
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"
									fill="black"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"
									fill="black"
								/>
								<path
									d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"
									fill="black"
								/>
							</svg>
						</button>
					</div>
				{/if}
			</div>
			<ValidationMessage for="signature" let:messages>
				<div class="label">
					<span class="label-text-alt text-error">{messages || ''}</span>
				</div>
			</ValidationMessage>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer space-x-2 justify-normal">
				<input
					type="checkbox"
					name="consent"
					class="checkbox checkbox-primary"
				/>
				<span class="label-text"
					>ข้าพเจ้ายินยอมลงชื่อเสนอกฎหมาย <a
						href="https://drive.google.com/file/d/1r8MtAdoqSPW37I4aQrgID5U1cFHqy-R2/view"
						target="_blank"
						class="underline">อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล</a
					></span
				>
			</label>
		</div>
		<button
			type="submit"
			class="btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"
			disabled={!$data.consent || isLoading}
		>
			{#if !isLoading}
				ลงชื่อเลย
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"
						fill="white"
					/>
					<path
						d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"
						fill="white"
					/>
				</svg>
			{:else}
				กำลังลงชื่อ...
				<span class="loading loading-spinner" />
			{/if}
		</button>
	</div>
	<dialog
		id="success-dialog"
		bind:this={successDialog}
		class="modal modal-bottom sm:modal-middle"
	>
		<form method="dialog" class="modal-box">
			<p class="text-neutral py-4">ลงชื่อสำเร็จ</p>
			<div class="modal-action">
				<button class="btn">ปิด</button>
			</div>
		</form>
	</dialog>

	<dialog
		id="error-dialog"
		bind:this={errorDialog}
		class="modal modal-bottom sm:modal-middle"
	>
		<form method="dialog" class="modal-box">
			<p class="text-neutral py-4">
				เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง
			</p>
			<div class="modal-action">
				<button class="btn">ปิด</button>
			</div>
		</form>
	</dialog>
</form>
