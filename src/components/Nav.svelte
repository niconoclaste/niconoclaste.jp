<script>
  export let current;
</script>

<nav class="global-nav">
  <ul>
    <li class={current === 'home' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#">Home</a>
    {:else}
      <a href="/">Home</a>
    {/if}
    </li>


    <li class={current === 'about' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#about">About</a>
    {:else}
      <a href="/about">About</a>
    {/if}
    </li>

    <li><a href="/#codes">Codes</a></li>
    <!-- <li class={current === 'codes' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#codes">Codes</a>
    {:else}
      <a href="/codes">Codes</a>
    {/if} -->

    <li class={current === 'articles' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#articles">Articles</a>
    {:else}
      <a href="/articles">Articles</a>
    {/if}
    </li>

    <li>
      <a href="mailto:test@test.com">Contact</a>
      <!-- <ul>
        <li><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer">twitter</a></li>
        <li><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer">codepen</a></li>
        <li><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer">github</a></li>
      </ul> -->
    </li>
  </ul>
</nav>