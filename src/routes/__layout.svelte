<script>
  import '$lib/assets/styles.css';
  import { posts } from '$lib/posts.js';
  import { setContext } from 'svelte';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import { title } from '$lib/store.js';
  import language from '$lib/store.js';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import translation from '$lib/translation.json';

  setContext('articles', posts);

  const pagePath = $page.url.pathname;
  const pathParts = pagePath.split('/');
  const pathLength = pathParts.length - 1;
  let layout = '';
  let category = pathParts[1];

  export let post_title = '';
  export let post_title_ja = '';
  export let post_excerpt = '';
  export let post_excerpt_ja = '';
  export let post_date = '';
  let lastModified = Date();
  if(browser){
    lastModified = new Date(document.lastModified);
  }

  function strip_tags(html){
    return html.replace(/(<([^>]+)>)/gi, "");
  }


  $: dateSyle = $language === 'en' ? 'short' : 'long';

  if(pagePath === '/'){
    layout = 'home';
    category = 'home';
    title.clear();
  }else{
    let pageTitle;
    if(pathLength === 1){
      layout = 'category';
      pageTitle = category.charAt(0).toUpperCase() + category.slice(1);
    }else{
      layout = 'single';
      let postTitle = '';
      const allPosts = import.meta.globEager('./**/*.svelte');
      for (let path in allPosts) {
        const post = allPosts[path];
        if(post.metadata){
          if(post.metadata.slug === pathParts[pathParts.length - 1]){
            postTitle = strip_tags(post.metadata.title);
            post_title = post.metadata.title;
            post_title_ja = post.metadata.title_ja;
            post_excerpt = post.metadata.excerpt;
            post_excerpt_ja = post.metadata.excerpt_ja;
            post_date = post.metadata.date;
          }
        }
      }
      pageTitle = postTitle.charAt(0).toUpperCase() + postTitle.slice(1)+' | '+category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    title.set(pageTitle);
  }


</script>

<svelte:head>
  <title>{$title}</title>
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
        {#if layout === 'category'}<span lang="{$language}">{translation[category].title[$language]}</span>{:else}<span lang="{$language}">{@html $language === 'en' ? post_title : post_title_ja}</span>{/if}
        
      </h1>
    </header>

    {#if category === 'articles'}
    <section class="l-section">
      <div class="m-bloc">
        {#if layout === 'single'}
          <h3 lang="{$language}" class="title">{@html $language === 'en' ? post_excerpt : post_excerpt_ja}</h3>
          <p lang="{$language}" class="m-article-date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post_date))}<small>(modified : {new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(lastModified))})</small>
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