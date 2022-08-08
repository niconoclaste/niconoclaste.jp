<script>
  export let current = '';
  export let layout = '';

  import translation from '@lib/translation.json';
  import language from '@lib/store.js';
  import { getContext } from 'svelte';
  import { settings } from '@lib/settings.js';

  const showWorks = getContext('showWorks');
  const showArticles = getContext('showArticles');

  let email = settings.email;

</script>

    <ul>
      <li class={current === 'home' ? "is-active" : ''}>
        <a href="{current === 'home' ? '#top' : '/'}">{translation.home.title[$language]}</a>
      </li>
      <li class={current === 'about' ? "is-active" : ''}>
        <a href="/#about">{translation.about.title[$language]}</a>
      </li>
      {#if showWorks}
      <li class={current === 'works' ? "is-active" : ''}>
        <a href="/#works">{translation.works.title[$language]}</a>
      </li>
      {/if}
      <li class={current === 'codes' ? "is-active" : ''}>
        <a href="/#codes">{translation.codes.title[$language]}</a>
      </li>
      {#if showArticles}
      <li class={current === 'articles' ? "is-active" : ''}>
        <a href="{current === 'articles' && layout === 'single' ? '/articles' : '/#articles'}">{translation.articles.title[$language]}</a>
      </li>
      {/if}
      <li>
        <!-- <a href="mailto:{email}">{translation.contact.title[$language]}</a> -->
        <span>{translation.contact.title[$language]}</span>
        <ul>
          <li><a href="mailto:{email}" style="background-image:var(--logo_email)" title="{email}">email</a></li>
          <li><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer" title="twitter.com/NicoloNoClaste" style="background-image:var(--logo_twitter)">twitter</a></li>
          <li><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer" title="codepen.io/niconoclaste" style="background-image:var(--logo_codepen)">codepen</a></li>
          <li><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer" title="github.com/niconoclaste" style="background-image:var(--logo_github)">github</a></li>
        </ul>
      </li>
      <li>
        {#if $language == 'en'}
        <button type="button" lang="ja" class="m-lang_btn" on:click={()=>(language.set('ja'))}>日本語</button>
        {:else}
        <button type="button" lang="en" class="m-lang_btn" on:click={()=>(language.set('en'))}>English</button>
        {/if}
      </li>
    </ul>
