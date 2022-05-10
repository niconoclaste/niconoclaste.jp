<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';
  import { title } from '$lib/store.js';
  import translation from '$lib/translation.json';
  import language from '$lib/store.js';
  const pagePath = $page.url.pathname;
  // console.log(pagePath);
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
      layout = 'inside';
      pageTitle = category.charAt(0).toUpperCase() + category.slice(1);
    }else{
      layout = 'post';
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

<main class="g-contents">
  <Header current={category} />

  <article class="l-article" id="{category}">
    <header class="m-header">
      <h1 class="m-title">
        <span lang="{$language}">{post_title}</span>
        <span lang="{$language}">{post_title_ja}</span>
      </h1>
    </header>

    <section class="l-section">
      <div class="m-bloc">
        <slot></slot>
      </div>
    </section>

    <footer class="m-footer">
      <p>→ <a href="/{category}">
        <strong lang="{$language}">
          {#if $language == 'en'}
          Go back to all {translation[category].title['en']}
          {:else}
          {translation[category].title['ja']}一蘭へもどる
          {/if}
        </strong>
      </a> ←</p>
    </footer>
  </article>
  <Footer/>
</main>

{/if}

<!-- 

{:else if layout === 'inside'}
<section class="contents">
  <Header current={category} />
  <section class="top-bloc">
    <div class="desc">
      <slot></slot>
    </div>
  </section>
  <Footer/>
</section>

{:else if layout === 'post'}

<section class="contents">
  <Header current={category} />
  <section class="top-bloc">
    <div class="desc">
      <slot></slot>
    </div>
  </section>
  <Footer/>

</section>

{:else}

<slot></slot>

{/if} -->