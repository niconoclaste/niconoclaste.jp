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

    <li class={current === 'writings' ? "is-active" : ''}>
    {#if current === 'home'}
      <a href="/#writings">Writings</a>
    {:else}
        <a href="/writings">Writings</a>
    {/if}
    </li>

    <li>
      <!-- <a href="/#contact">Contact</a> -->
      <a href="/">Contact</a>
      <ul>
        <li><a href="">email</a></li>
        <li><a href="">email</a></li>
        <li><a href="">email</a></li>
        <li><a href="">email</a></li>
      </ul>
    </li>
  </ul>
</nav>