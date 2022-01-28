<script>
  // import { language } from '$lib/store.js';
  export let current;
</script>

<nav class="global-nav">
  <ul>
    <!-- <li>{$language}</li> -->
    <li class={current === 'home' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#"><span lang="en">Home</span><span lang="ja">ホーム</span></a>
    {:else}
      <a href="/"><span lang="en">Home</span><span lang="ja">ホーム</span></a>
    {/if}
    </li>


    <li class={current === 'about' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#about"><span lang="en">About</span><span lang="ja">について</span></a>
    {:else}
      <a href="/about"><span lang="en">About</span><span lang="ja">について</span></a>
    {/if}
    </li>

    <li><a href="/#codes"><span lang="en">Codes</span><span lang="ja">コード</span></a></li>
    <!-- <li class={current === 'codes' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#codes">Codes</a>
    {:else}
      <a href="/codes">Codes</a>
    {/if} -->

    <li class={current === 'articles' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#articles"><span lang="en">Articles</span><span lang="ja">ライティングス</span></a>
    {:else}
      <a href="/articles"><span lang="en">Articles</span><span lang="ja">ライティングス</span></a>
    {/if}
    </li>

    <li>
      <a href="mailto:test@test.com"><span lang="en">Contact</span><span lang="ja">コンタクト</span></a>
      <!-- <ul>
        <li><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer">twitter</a></li>
        <li><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer">codepen</a></li>
        <li><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer">github</a></li>
      </ul> -->
    </li>
    <li>
      <!-- <button type="button" class="js-switch-lang" lang="ja" on:click={() => { language.set('ja'); }}>日本語</button> -->
      <!-- <button type="button" class="js-switch-lang" lang="en" on:click={() => { language.set('en'); }}>English</button> -->
      <button type="button" class="js-switch-lang" lang="ja">日本語</button>
      <button type="button" class="js-switch-lang" lang="en">English</button>
    </li>
  </ul>
</nav>