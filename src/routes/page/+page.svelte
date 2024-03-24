<script>
	import { count } from '../../stores.js';
	let countValue;
	count.subscribe((value) => {
		countValue = value;
	});
</script>

<div class="flex flex-col w-screen text-center">
	<span class="text-5xl mb-4">PAGE</span>
	<span class="text-xl">Clickcount</span>
	<span class="text-5xl font-bold">{countValue}</span>
	<div class="mt-2">
		<button class="btn btn-primary" on:click={() => count.update((n) => n + 1)}>Add</button>
		<button class="btn btn-accent" on:click={() => count.set(0)}>Reset</button>
	</div>
</div>
