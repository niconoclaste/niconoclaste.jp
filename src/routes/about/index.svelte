<script context="module">
  import { title } from "/src/store.js";
	title.set('About');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
</script>

<section class="contents">

  <Header current="about" />

  <h1>About !!!</h1>
  <p>TODO...</p>
</section>
