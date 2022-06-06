<script>
  import Nav from '$lib/components/Nav.svelte';
  export let current;
  export let layout;
</script>

<header class="g-header">
  <nav class="g-navigation" tabindex="0">
    <button class="m-hamburger open">
      <i></i><i></i><i></i>
    </button>
    <button class="m-hamburger close">
      <span></span>
      <span></span>
    </button>

    <div class="g-navigation_container">
      <Nav current={current} layout={layout} />
    </div>
  </nav>
</header>

<aside class="g-aside">
  <h1>
    <a href="{current === 'home' ? '#top' : '/'}">NicoNoClaste</a>
    <span>WEB DEVELOPER ・ ウェブデベロッパー</span>
  </h1>
</aside>