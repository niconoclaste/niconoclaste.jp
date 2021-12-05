<script>
  export let current;
  // let navRoot = '/';
  //let navRoot = '#';
  // if(current == 'home'){
  //   navRoot = '#';
  // }
</script>

<!-- <button class="js-toggle-nav" aria-label="toggle navigation"></button> -->

<nav class="global-nav">
  <ul>
    <li class={current == 'home' ? "is-active" : ''}>
      <a href="/">Home</a>
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#codes">Codes</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </li>

    <li class={current == 'about' ? "is-active" : ''}>
      <a href="/about">About</a>
      <ul>
        <li>
          <a href="/about/#me">About Me</a>
        </li>
        <li>
          <a href="/about/#career">About My Career</a>
        </li>
        <li>
          <a href="/about/#site">About This Site</a>
        </li>
      </ul>
    </li>

    <li class={current == 'codes' ? "is-active" : ''}>
      <a href="./codes">Codes</a>
      <ul>
        <li>
          <a href="./codes/#published">Published</a>
        </li>
        <li>
          <a href="./codes/#dev">In Development</a>
        </li>
      </ul>
    </li>

    <li class={current == 'blog' ? "is-active" : ''}>
      <a href="./blog">Blog</a>
      <ul>
        <li>
          <a href="./blog/howto">How to code</a>
        </li>
      </ul>
    </li>

    <li class={current == 'contact' ? "is-active" : ''}>
      <a href="./contact">Contact</a>
    </li>
  </ul>
</nav>