<script>
	import { count } from '../stores.js';
	let countValue;
	count.subscribe((value) => {
		countValue = value;
	});
</script>

<div class="flex flex-col w-screen text-center">
	<span class="text-5xl mb-4">HOME</span>
	<div class="avatar justify-center">
		<div class="w-24 mask mask-hexagon">
			<img alt="avatar" src="favicon.png" />
		</div>
	</div>
	<span class="text-xl">Clickcount</span>
	<span class="text-5xl font-bold">{countValue}</span>
</div>
