import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import tailwindcss from '@tailwindcss/vite';

const base = globalThis.process.env.BASE_PATH || '';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			// Static builds use relative Vite paths; Workbox needs the deployed URL base.
			kit: { base: `${base}/` },
			workbox: {
				navigateFallback: `${base}/`
			},
			manifest: {
				name: 'Svelte PWA Template',
				short_name: 'SPWAT',
				description: 'a svelte pwa app template',
				scope: `${base}/`,
				start_url: `${base}/`,
				background_color: '#000000',
				theme_color: '#5ac6e6',
				display: 'fullscreen',
				icons: [
					{
						src: 'favicon.png',
						sizes: '256x256',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{
						src: 'logo.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			},
			devOptions: {
				enabled: true
			}
		})
	]
});
