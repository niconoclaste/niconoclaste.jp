<script>
  import '$lib/assets/styles.css';

  import { setContext } from 'svelte';

  import { settings } from '$lib/settings.js';
  import { articles } from '$lib/articles.js';
  import Footer from '$lib/components/Footer.svelte';

  export let data;
	let {works} = data;
  setContext('works', works);

  let showWorks = works.filter((work) => !work.hidden &&  work.top).length >= settings.maxWorks ? true : false;
  setContext('showWorks', showWorks);

  let showArticles = articles.filter((article) => !article.hidden &&  article.top).length > 0 ? true : false;
  setContext('showArticles', showArticles);

	const htmlTitle = settings.baseTitle;
</script>

<svelte:head>
  <title>{htmlTitle}</title>
</svelte:head>

<slot></slot>

<Footer/>
