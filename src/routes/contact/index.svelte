<script context="module">
  import { title } from "/src/store.js";
	title.set('Contact');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
</script>

<section class="contents">

  <Header current="contact" />

  <h1>Contact !!!</h1>
  <p>TODO...</p>
</section>
