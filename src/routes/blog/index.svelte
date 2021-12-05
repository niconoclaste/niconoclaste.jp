<script context="module">
  import { title } from "/src/store.js";
	title.set('Blog');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
</script>

<section class="contents">

  <Header current="blog" />

  <h1>My blog !!!</h1>
  <p>TODO...</p>
</section>
