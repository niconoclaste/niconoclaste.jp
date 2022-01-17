<script>
  import { title } from "/src/store.js";
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;
  const allPosts = import.meta.globEager('./*.svelte');
  let posts = [];
  for (let path in allPosts) {
    const post = allPosts[path];
    console.log(post);
    if(post.metadata){
      if(post.metadata.slug == 'about-test' ){
        posts.push({ post, ...post.metadata });
      }
    }
  }

  title.set(posts[0].title+ ' | About');
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>



<section class="contents">
  <Header current="about" />
  <section class="top-bloc">

    <div class="desc">

      <slot></slot>

    </div>
</section>
<Footer/>
</section>

