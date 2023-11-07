<script lang="ts">
	import SignatureForm from './signature-form.svelte';
</script>

<div
	class="flex md:w-[85vw] md:max-w-[850px] md:flex-row flex-col text-base-100 body-02-normal md:space-x-[40px] md:space-y-none space-y-[8px]"
>
	<div class="md:max-w-[320px]">
		<h2 class="heading-responsive-02">ร่วมลงชื่อ</h2>
		<p>
			เพื่อเสนอกฎหมาย ผู้สูงอายุและบำนาญพื้นฐานแห่งชาติ(ฉบับที่ ..) พ.ศ. ...
		</p>
		<div class="p-[10px] text-neutral bg-primary-focus rounded-[8px]">
			<p class="font-semibold">คุณสมบัติของผู้เข้าชื่อเสนอกฎหมาย</p>
			<ul class="list-disc list-inside">
				<li>
					เป็นคนไทยที่มีสิทธิเลือกตั้ง (อายุ 18 ปีขึ้นไป) ในวันที่เข้าชื่อฯ
				</li>
				<li>ไม่เป็นบุคคลต้องห้ามใช้สิทธิเลือกตั้ง</li>
			</ul>
		</div>
	</div>
	<div class="bg-base-100 p-[10px] rounded-[4px]">
		<SignatureForm />
	</div>
</div>
