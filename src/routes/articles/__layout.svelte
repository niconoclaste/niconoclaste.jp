<script context="module">
	export async function load({ params, fetch}) {
    const { slug } = params;
		const url = '/articles/'+slug+'.json';
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
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
  import { title } from "/src/store.js";
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
  export let post;
	title.set(post.title+ ' | Articles');
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<section class="contents">

  <Header current="articles" />


  <section class="article">
    <h1>{post.title}</h1>
    <slot></slot>

  </section>
</section>
