<script>
  import '$lib/assets/styles.css';

  import { setContext } from 'svelte';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import language from '$lib/store.js';

  import { settings } from '$lib/settings.js';
  import { articles } from '$lib/articles.js';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import translation from '$lib/translation.json';

  export let data;
	let {works} = data;

  setContext('works', works);
  let showWorks = works.filter((work) => !work.hidden &&  work.top).length >= settings.maxWorks ? true : false;

  setContext('showWorks', showWorks);

  let showArticles = articles.filter((article) => !article.hidden &&  article.top).length > 0 ? true : false;
  setContext('showArticles', showArticles);



  let pagePath = $page.url.pathname;
  let pathParts = pagePath.split('/');
  let pathLength = pathParts.length - 1;
  
  let layout = pagePath === '/' ? 'home' : pathLength === 1 ? 'category' : 'single';

  let category = pathParts[1] || 'home';

  export let post_title = '';
  export let post_title_ja = '';
  export let post_excerpt = '';
  export let post_excerpt_ja = '';
  export let post_date = '';
  export let post_lastModified = '';

  function strip_tags(html){
    return html.replace(/(<([^>]+)>)/gi, "");
  };

  $: dateSyle = $language === 'en' ? 'short' : 'long';

  let pageTitle = [settings.baseTitle];
  let pageTitle_ja = [settings.baseTitle];

  if(layout !== 'home'){
    pageTitle = [category.charAt(0).toUpperCase() + category.slice(1), ...pageTitle];
    pageTitle_ja = [translation[category].title.ja, ...pageTitle_ja];

    if(layout === 'single'){
      let allPosts;
      if(category === 'articles'){
        allPosts = import.meta.glob(
					['./articles/**/+page.svelte', '!./articles/+page.svelte'],
					{eager: true}
				);
      }else{
        allPosts = import.meta.globEager('./**/*+page.svelte');
      }

      let postMeta = allPosts['./'+category+'/'+pathParts[2]+'/+page.svelte'].metadata;
      post_title = postMeta.title;
      post_title_ja = postMeta.title_ja;
      post_excerpt = postMeta.excerpt;
      post_excerpt_ja = postMeta.excerpt_ja;
      post_date = postMeta.date;
      post_lastModified = postMeta.lastModified;

      pageTitle = [post_title, ...pageTitle];
      pageTitle_ja = [post_title_ja, ...pageTitle_ja];
    }
  }
</script>

<svelte:head>
  <title>{$language === 'en' ? pageTitle.join(' | ') : pageTitle_ja.join(' | ')}</title>
</svelte:head>

{#if layout === 'home'}
<slot></slot>
<Footer/>
{:else}
<main class="g-main">
  <Header current={category} layout={layout} />
  <article class="l-article" id="{category}">
    <header class="m-header">
      <h1 class="title">
        <!-- <span lang="{$language}">{translation[category].title[$language]}</span> -->
        {#if layout === 'category'}
        <span lang="{$language}">{translation[category].title[$language]}</span>
        {:else}
        <span lang="{$language}">{@html $language === 'en' ? post_title : post_title_ja}</span>
        {/if}
      </h1>
    </header>

    {#if category === 'articles'}
    <section class="l-section">
      <div class="m-bloc">
        {#if layout === 'single'}
          <h3 lang="{$language}" class="title">{@html $language === 'en' ? post_excerpt : post_excerpt_ja}</h3>
          
					<p lang="{$language}" class="m-article-date">
						{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post_date))}
						<small>(modified : {new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post_lastModified))})</small>
          </p>
        {/if}
        <slot></slot>
      </div>
    </section>
    {:else}
    <slot></slot>
    {/if}

    {#if layout === 'single'}
    <footer class="m-footer">
      <p><a href="/{category}"><strong lang="{$language}">{translation[category].more[$language]}</strong></a></p>
    </footer>
    {:else}
    <footer class="m-footer">
      <p><a href="/#{category}"><strong lang="{$language}">{#if $language == 'en'}Site top{:else}トップページ{/if}</strong></a></p>
    </footer>
    {/if}
  </article>
  <Footer/>
</main>
{/if}