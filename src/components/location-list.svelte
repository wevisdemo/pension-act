<script lang="ts">
	import { fetchLocations } from '../utils/sheets';
</script>

{#await fetchLocations()}
	Loading...
{:then locations}
	{@const provinces = [...new Set(locations.map((l) => l.province))]}

	<h1>
		มีจุดตั้งโต๊ะทั้งหมด {locations.length} จุด ใน {provinces.length} จังหวัด
	</h1>

	{#each provinces as province, index}
		<div class="collapse collapse-arrow">
			<input type="radio" name="my-accordion-1" checked={index === 0} />
			<h2 class="collapse-title font-bold">
				{province}
			</h2>
			<ul class="collapse-content space-y-4">
				{#each locations.filter((l) => l.province === province) as { name, openingTime, phone, address, mapLink }}
					<li>
						<h3 class="font-bold">{name}</h3>
						<p>วันและเวลาที่เปิด: {openingTime}</p>
						<p>ติดต่อ: {phone}</p>
						<p>ที่อยู่: {address}</p>
						<a href={mapLink} target="_blank" rel="noopener noreferrer">
							ดูแผนที่
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
{/await}
