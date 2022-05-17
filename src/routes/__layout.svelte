<script>
  import { posts } from '$lib/posts.js';

  import { setContext } from 'svelte';
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
            postTitle = post.metadata.title;
            post_title = post.metadata.title;
            post_title_ja = post.metadata.title_ja;
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
  <Header current={category} />

  <article class="l-article" id="{category}">
    <header class="m-header">
      <h1 class="title">{#if layout === 'category'}<span lang="{$language}">{translation[category].title[$language]}</span>{:else}<span lang="{$language}">{$language == 'en' ? post_title : post_title_ja}</span>{/if}</h1>
    </header>

    {#if category === 'articles'}
    <section class="l-section">
      <div class="m-bloc">
        <slot></slot>
      </div>
    </section>
    {:else}
    <slot></slot>
    {/if}

    {#if layout === 'single'}
    <footer class="m-footer">
      <p><a href="/{category}"><strong lang="{$language}">{#if $language == 'en'}Go back to {translation[category].title['en']} category{:else}{translation[category].title['ja']}の一蘭へもどる{/if}</strong></a></p>
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