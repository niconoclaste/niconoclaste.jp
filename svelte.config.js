import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the target element in src/app.html
		target: 'body',
		adapter: adapter(),
		router: false,
    /*vite: () => ({
      server: {
        watch: {
          include: 'static/global.css'
        }
      },
    })*/
	},
};

export default config;
