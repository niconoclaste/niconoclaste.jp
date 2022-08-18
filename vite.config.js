import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@lib': path.resolve('./src/lib'),
			'@assets': path.resolve('./src/lib/assets')
		}
	}
};

export default config;