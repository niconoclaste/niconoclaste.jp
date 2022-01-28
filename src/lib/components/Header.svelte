<script>
  import Nav from '$lib/components/Nav.svelte';
  export let current;
</script>

<header class="global-header">
  <Nav current={current} />
</header>
<aside class="global-aside">
{#if current === 'home'}
  <a href="/#">NicoNoClaste</a>
{:else}
  <a href="/">NicoNoClaste</a>
{/if}
</aside>