import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
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
      enabled: false
    },
    browser: {
      router: false
    }
  },
};

export default config;
