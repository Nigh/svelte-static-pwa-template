<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import '../app.css';
	import Nav from './nav.svelte';

	onMount(async () => {
		const { registerSW } = await import('virtual:pwa-register');
		registerSW({ immediate: true });
	});
</script>

<svelte:head>
	<link rel="manifest" href={`${base}/manifest.webmanifest`} />
</svelte:head>

<Nav />
<slot />
