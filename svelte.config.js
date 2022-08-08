import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
const extensions = ['.svelte'];

const config = {
  preprocess: [
    preprocess({
      preserve: ['module']
    }),
    mdsvex({
      extensions: extensions,
    })
  ],
  extensions: extensions,
  kit: {
    // hydrate the target element in src/app.html
    // target: 'body',
    adapter: adapter(),
    prerender: {
      enabled: true
    },
    browser: {
      router: false
    },
		vite: {
			resolve: {
				alias: {
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib'),
					'@assets': path.resolve('./src/lib/assets')
				}
			}
		}
  }
};

export default config;
