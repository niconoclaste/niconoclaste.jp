<script context="module">
  import { title } from "/src/store.js";
	title.set('Blog');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;

  export const load = async({ fetch }) => {
		const url = './blog/blog.json';
		const res = await fetch(url);
    
		if (res.ok) {
      const posts = await res.json();
			return {
				props: {
					posts
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
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
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href="/blog/{post.slug}">MORE</a>
			{#if post.tags}
				<div class="tags">
					{#each post.tags.slice(0, 2) as tag}
						<span>{tag}</span>
					{/each}
				</div>
			{/if}
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