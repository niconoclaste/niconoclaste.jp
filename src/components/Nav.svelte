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

    <li>
      <a href="/#about">About</a>
    </li>

    <li>
      <a href="/#codes">Codes</a>
    </li>

    <li class={current === 'blog' ? "is-active" : ''}>
      <a href="/blog">Blog</a>
      <!-- <ul>
        <li>
          <a href="./blog/howto">How to code</a>
        </li>
      </ul> -->
    </li>
    <li>
      <a href="/#contact">Contact</a>
    </li>
  </ul>
</nav>