<script lang="ts">
	import { fetchLocations } from '../utils/sheets';
</script>

{#await fetchLocations()}
	Loading...
{:then locations}
	{@const provinces = [...new Set(locations.map((l) => l.province))]}

	<h1 class="heading-responsive-02 text-center leading-none mb-[30px]">
		มีจุดตั้งโต๊ะทั้งหมด {locations.length} จุด ใน {provinces.length} จังหวัด
	</h1>

	{#each provinces as province, pindex}
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="{pindex}" class="collapse collapse-arrow border-t-2 rounded-none">
			<input type="radio" name="my-accordion-1" />
			<h2 class="collapse-title px-0 pt-2 pb-[18px] flex flex-row gap-1 items-center">
				<span class="heading-responsive-01">{province}</span>
				<span class="body-02-normal font-normal">( {locations.filter((l) => l.province === province).length} จุด )</span>
			</h2>
			<ul class="collapse-content space-y-[26px] px-0">
				{#each locations.filter((l) => l.province === province) as { name, openingTime, phone, address, mapLink }}
					<li class="grid gap-y-[10px] pt-[10px] border-t border-base-300 body-01-normal">
						<h3 class="heading-03">{name}</h3>
						<div>
							<h3 class="heading-01 text-xs">วันและเวลาที่เปิด</h3>
							<p>{openingTime}</p>
						</div>
						<div>
							<h3 class="heading-01 text-xs">ติดต่อ</h3>
							<p>{phone}</p>
						</div>
						<div>
							<h3 class="heading-01 text-xs">ที่อยู่</h3>
							<p>{address}</p>
							<p class="mt-1">
								<a href={mapLink} class="link-01 underline text-accent" target="_blank" rel="noopener noreferrer">
									ดูแผนที่
								</a>
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
{/await}

<style>
	.collapse-arrow .collapse-title:after {
		top: calc(50% - 0.25rem);
		right: 0.5rem;
	}
</style>