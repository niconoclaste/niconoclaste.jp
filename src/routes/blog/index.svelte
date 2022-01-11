<script context="module">
  import { title } from "/src/store.js";
	title.set('Blog');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
  export const load = async({ fetch }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  };
</script>
<script>
  export let posts;
</script>


<section class="contents">

  <Header current="blog" />

  <h1>My blog !!!</h1>
  <p>TODO...</p>
  <ul>
  {#each posts as post}
    <li>
      <h2>{post.title.substring(0,30)}</h2>
      <a href="/blog/{post.id}">MORE</a>
    </li>
  {/each}
  </ul>
</section>


<style>
ul{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style:none;
}
</style>