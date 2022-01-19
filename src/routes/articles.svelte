<script context="module">
  import { title } from "/src/store.js";
	title.set('Articles');
  import Header from '/src/components/Header.svelte';
  import PostCard from '/src/components/Post-card.svelte';
	export const prerender = true;

  export const load = async({ fetch }) => {
		const url = '/articles/articles.json';
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
  console.log(posts);
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<section class="contents">

  <Header current="articles" />
  <section>
    <h1>My articles !!!</h1>
    <p>TODO...</p>
    <PostCard posts={posts} />
  </section>
</section>
