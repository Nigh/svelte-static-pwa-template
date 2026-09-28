import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{ ignores: ['.svelte-kit/**', 'build/**', 'node_modules/**'] },
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier
];
