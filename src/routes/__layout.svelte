
<script>
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
  import { page } from '$app/stores';
  import { title } from "$lib/store.js";
  const pagePath = $page.url.pathname;
  const pathParts = pagePath.split('/');
  const pathLength = pathParts.length - 1;
  let layout = '';
  let category = pathParts[1];

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
          }
        }
      }
      pageTitle = postTitle.charAt(0).toUpperCase() + postTitle.slice(1)+' | '+category.charAt(0).toUpperCase() + category.slice(1);
    }
    title.set(pageTitle);
  }


console.log({layout});
console.log({category});

</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>


{#if layout === 'home'}
<slot></slot>
<Footer/>
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
{/if}