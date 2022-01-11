<script>
  import Nav from '/src/components/Nav.svelte';
  export let current;
</script>

<header>
  {#if current === 'home'}
  <Nav current={current} />
  {:else}
  <h1><a href="/">NicoNoClaste</a></h1>
  <Nav current={current} />
  {/if}
</header>