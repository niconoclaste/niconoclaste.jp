<script>
  export let current = '';
  export let layout = '';

  import translation from '$lib/translation.json';
  import language from '$lib/store.js';
  import works from '$lib/works.json';
  import { getContext } from 'svelte';
  import { settings } from '$lib/settings.js';

  let articles = getContext('articles');
  works.filter((post) => !post.hidden);
  let maxPosts = settings.maxPosts;
  let email = settings.email;
</script>

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
        <a href="{current === 'articles' && layout === 'single' && articles.length > maxPosts ? '/articles' : '/#articles'}">
        <!-- <a href="/#articles"> -->
          <span lang="{$language}">{translation.articles.title[$language]}</span>
        </a>
      </li>
      {/if}
      <li>
        <a href="mailto:{email}">
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
        {#if $language == 'en'}
        <button type="button" lang="ja" class="m-lang_btn" on:click={()=>(language.set('ja'))}>日本語</button>
        {:else}
        <button type="button" lang="en" class="m-lang_btn" on:click={()=>(language.set('en'))}>English</button>
        {/if}
      </li>
    </ul>
