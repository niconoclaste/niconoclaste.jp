<script>
  import Nav from '$lib/components/Nav.svelte';
  export let current;
  export let layout;
  // export let filter;
</script>

<header class="g-header">
  <nav class="g-navigation">
    <div class="g-navigation_container">
      <Nav current={current} layout={layout} />
    </div>
  </nav>
</header>
<aside class="g-aside">
  <h1>
    <a href="{current === 'home' ? '/#' : '/'}">NicoNoClaste</a>
    <span>WEB DEVELOPER ・ ウェブデベロッパー</span>
  </h1>
</aside>