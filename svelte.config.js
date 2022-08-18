import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
const extensions = ['.svelte'];

/** @type {import('@sveltejs/kit').Config} */
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
    }
  }
};

export default config;
