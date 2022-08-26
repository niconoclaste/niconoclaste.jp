<script>
  import { page } from '$app/stores';
  import language from '$lib/store.js';
  import { settings } from '$lib/settings.js';
  import Header from '$lib/components/Header.svelte';
  import translation from '$lib/translation.json';
	import { articles } from '$lib/articles.js';

  let pagePath = $page.url.pathname;
  let pathParts = pagePath.split('/');
  let pathLength = pathParts.length - 1;

  let layout = pathLength === 1 ? 'category' : 'single';
  let category = "articles";

  export let post_title = '';
  export let post_title_ja = '';
  export let post_excerpt = '';
  export let post_excerpt_ja = '';
  export let post_date = '';
  export let post_lastModified = '';

  $: dateSyle = $language === 'en' ? 'short' : 'long';

  let pageTitle = [category.charAt(0).toUpperCase() + category.slice(1), settings.baseTitle];
  let pageTitle_ja = [translation[category].title.ja, settings.baseTitle];

  if(layout === 'single'){
		const currentArticle = articles.filter(article => article.slug === pathParts[2]);
		const postMeta = currentArticle[0];
    post_title = postMeta.title;
    post_title_ja = postMeta.title_ja;
    post_excerpt = postMeta.excerpt;
    post_excerpt_ja = postMeta.excerpt_ja;
    post_date = postMeta.date;
    post_lastModified = postMeta.lastModified;
    pageTitle = [postMeta.title, ...pageTitle];
    pageTitle_ja = [postMeta.title_ja, ...pageTitle_ja];
  }
</script>

<svelte:head>
  <title>{$language === 'en' ? pageTitle.join(' | ') : pageTitle_ja.join(' | ')}</title>
</svelte:head>

<main class="g-main">

  <Header current={category} layout={layout} />

  <article class="l-article" id={category}>
    <header class="m-header">
      <h1 class="title">
      {#if layout === 'category'}
        {translation[category].title[$language]}
      {:else}
        {$language === 'en' ? post_title : post_title_ja}
      {/if}
      </h1>
    </header>

    <section class="l-section">
      <div class="m-bloc">
        {#if layout === 'single'}
        <h3 class="title">{@html $language === 'en' ? post_excerpt : post_excerpt_ja}</h3>
          
				<p class="m-article-date">
					{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post_date))}
					<small>(modified : {new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post_lastModified))})</small>
        </p>
      	{/if}
      	<slot></slot>
      </div>
    </section>

    <footer class="m-footer">
			{#if layout === 'single'}
      <p><a href="/{category}"><strong>{translation[category].more[$language]}</strong></a></p>
			{:else}
			<p><a href="/#{category}"><strong>{#if $language == 'en'}Site top{:else}トップページ{/if}</strong></a></p>
			{/if}
    </footer>
  </article>
</main>