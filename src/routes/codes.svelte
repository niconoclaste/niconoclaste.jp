<script>
  import { title } from "/src/store.js";
	title.set('Codes');
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;
  const allPosts = import.meta.globEager('/src/codes/*.svelte');
  let posts = [];
  for (let path in allPosts) {
    const post = allPosts[path];
    posts.push({ post, ...post.metadata });
    console.log(post);
  }
</script>


<section class="contents">
  <Header current="codes" />
  <section class="top-bloc">
    <div class="desc">
      <h1>My Codes !!!</h1>
      <p>TODO...</p>
      <ul>
      {#each posts as post}
        <li>
          <a href="/codes/{post.slug}">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          {#if post.tags}
            <div class="tags">
              {#each post.tags.slice(0, 2) as tag}
                <span>{tag}</span>
              {/each}
            </div>
          {/if}
          </a>
        </li>
      {/each}
      </ul>
    </div>
  </section>
  <Footer/>
</section>






<style>
  ul{
    list-style:none;
    display:flex;
  }
  a{
    text-decoration:none;
    color:black;
  }
  a:hover{
    text-decoration:underline;
  }

</style>