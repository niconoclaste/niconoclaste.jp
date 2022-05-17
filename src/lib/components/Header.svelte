<script>
  import Nav from '$lib/components/Nav.svelte';
  export let current;
  // export let filter;
</script>

<header class="g-header">
  <Nav current={current} />
</header>
<aside class="g-aside">
  <h1>
    <a href="{current === 'home' ? '/#' : '/'}">NicoNoClaste</a>
    <span>WEB DEVELOPER ・ ウェブデベロッパー</span>
  </h1>
</aside>