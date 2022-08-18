<script>
  import Nav from '@components/Nav.svelte';
  export let current;
  export let layout;

	let naviIsopened = false;

	let bodyTop = 0;
	let scrollBarWidth = 0;

	function scrollLock(){
		if(!document.documentElement.classList.contains('is-locked')){
			scrollBarWidth = window.innerWidth - document.body.clientWidth;
			bodyTop = window.scrollY;
			document.documentElement.classList.add('is-locked');
			document.body.style.setProperty('--bodyTop', '-'+ bodyTop + 'px');
			document.body.style.setProperty('--scrollBar', scrollBarWidth + 'px');
		}
	}

	function scrollUnlock(){
		if(document.documentElement.classList.contains('is-locked')){
			document.documentElement.classList.add('is-moving');
			document.documentElement.classList.remove('is-locked');
			window.scrollTo(0, bodyTop);
			document.body.style.setProperty('--bodyTop', '0px');
			document.body.style.setProperty('--scrollBar', '0px');
			document.documentElement.classList.remove('is-moving');
		}
	}

	function switchMenu(){
		// console.log(naviIsopened);
		if(!naviIsopened){
			scrollLock();
		}else{
			scrollUnlock();
		}
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