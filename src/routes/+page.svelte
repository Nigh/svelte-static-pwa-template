<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	let count = $state(0);
	onMount(() => {
		count = Number(globalThis.localStorage.getItem('count')) || 0;
	});
	function setCount(value) {
		count = value;
		globalThis.localStorage.setItem('count', String(value));
	}
</script>

<div class="grid justify-items-center w-screen text-center">
	<h1 class="text-2xl">Click Me</h1>
	<button
		class="cursor-pointer h-full mask mask-hexagon hover:scale-120"
		onclick={() => setCount(count + 1)}
	>
		<div class="avatar justify-center">
			<div class="w-24 mask mask-hexagon">
				<img alt="avatar" src={`${base}/favicon.png`} />
			</div>
		</div>
	</button>
	<span class="text-xl mt-4">Clickcount</span>
	<span class="text-5xl font-bold">{count}</span>
	<button class="btn btn-md btn-accent mt-2" onclick={() => setCount(0)}>Reset</button>
</div>
