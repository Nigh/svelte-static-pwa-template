<script>
	import { resolve } from '$app/paths';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a href={resolve('/')} class="btn btn-outline btn-info btn-xs md:btn-md">Home</a>
	</div>
	<div class="navbar-center">
		<p class="btn btn-ghost text-xl">Svelte PWA Template</p>
	</div>
	<div class="navbar-end">
		<a
			href="https://github.com/Nigh/svelte-static-pwa-template"
			class="btn btn-outline btn-warning btn-xs md:btn-md">GitHub</a
		>
	</div>
</div>
