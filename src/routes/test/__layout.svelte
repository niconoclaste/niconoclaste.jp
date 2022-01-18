<script context="module">
  import { title } from "/src/store.js";
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;

  const allPosts = import.meta.globEager('./*.svelte');
  let posts = [];
  for (let path in allPosts) {
    const post = allPosts[path];
    if(post.metadata){
      posts.push({ 
        post,
         ...post.metadata 
      });
    }
  }
  const pageUrl = window.location.href;
  const parts = pageUrl.split('/');
  const lastSegment = parts.pop() || parts.pop();
  const currPost = posts.filter(post => post.slug === lastSegment)
  let category = pageUrl.split('/');
  category = category[category.length - 2];
  let postCategory = category.charAt(0).toUpperCase() + category.slice(1);
  let postTitle = currPost[0].title;
  postTitle = postTitle.charAt(0).toUpperCase() + postTitle.slice(1);

  title.set(postTitle+ ' | '+postCategory);
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<section class="contents">
  <Header current={category} />
  <section class="top-bloc">

    <div class="desc">

      <slot></slot>

    </div>
</section>
<Footer/>
</section>

