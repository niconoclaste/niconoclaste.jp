<script context="module">
  import { title } from "/src/store.js";
	title.set('Codes');
  import Header from '/src/components/Header.svelte';
	export const prerender = true;
</script>

<section class="contents">

  <Header current="codes" />

  <h1>Codes !!!</h1>
  <p>TODO...</p>
</section>
