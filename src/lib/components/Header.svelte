<script>
  import Nav from '@components/Nav.svelte';
  export let current;
  export let layout;

	let naviIsopened = false;

	function switchMenu(){
		naviIsopened = !naviIsopened;
	}
</script>

<header class="g-header">

  <nav class="g-navigation" tabindex="0">
		<button class="m-hamburger" class:is-closed={naviIsopened} on:click={switchMenu}>
			<i></i><i></i><i></i>
		</button>
    <div class="g-navigation_container">
      <Nav current={current} layout={layout} on:linkClick={switchMenu} />
    </div>
  </nav>
</header>

<aside class="g-aside">
  <h1>
    <a href="{current === 'home' ? '#top' : '/'}">NicoNoClaste</a>
    <span>WEB DEVELOPER ・ ウェブデベロッパー</span>
  </h1>
</aside>