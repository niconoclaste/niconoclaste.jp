<script>
  import { title } from "/src/store.js";
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<slot></slot>