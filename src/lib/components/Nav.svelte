<script>
  export let current;
  import translation from '$lib/translation.json';
  import language from '$lib/store.js';
  import { getContext } from 'svelte';
  export let articles = getContext('articles');
  import works from '$lib/works.json';
  works.filter((post) => !post.hidden);
</script>

<nav class="g-navigation">
  <div class="g-navigation_container">
    <ul>
      <li class={current === 'home' ? "is-active" : ''}>
        <a href="{current === 'home' ? '/#' : '/'}">
          <span lang="{$language}">{translation.home.title[$language]}</span>
        </a>
      </li>
      <li class={current === 'about' ? "is-active" : ''}>
        <a href="/#about">
          <span lang="{$language}">{translation.about.title[$language]}</span>
        </a>
      </li>
      {#if works.length > 0}
      <li class={current === 'works' ? "is-active" : ''}>
        <a href="/#works">
          <span lang="{$language}">{translation.works.title[$language]}</span>
        </a>
      </li>
      {/if}
      <li class={current === 'codes' ? "is-active" : ''}>
        <a href="/#codes">
          <span lang="{$language}">{translation.codes.title[$language]}</span>
        </a>
      </li>
      {#if articles.length > 0}
      <li class={current === 'articles' ? "is-active" : ''}>
        <a href="{current === 'home' ? '/#articles' : '/articles'}">
          <span lang="{$language}">{translation.articles.title[$language]}</span>
        </a>
      </li>
      {/if}
      <li>
        <a href="mailto:test@test.com">
          <span lang="{$language}">{translation.contact.title[$language]}</span>
        </a>
        <!-- <ul>
          <li><a href="mailto:test@test.com">e-mail</a></li>
          <li><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer">twitter</a></li>
          <li><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer">codepen</a></li>
          <li><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer">github</a></li>
        </ul> -->
      </li>
      <li>
        <!-- <button type="button" on:click="{() => changeLang('ja')}" lang="ja">日本語</button>
        <button type="button" on:click="{() => changeLang('en')}" lang="en">English</button> -->

        {#if $language == 'en'}
        <button type="button" lang="ja" on:click={()=>(language.set('ja'))}>日本語</button>
        {:else}
        <button type="button" lang="en" on:click={()=>(language.set('en'))}>English</button>
        {/if}
      </li>
    </ul>
  </div>
</nav>