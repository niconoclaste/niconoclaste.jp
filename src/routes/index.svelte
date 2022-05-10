<script context="module">
  export async function load({ fetch }) {
    const url = '/api/posts.json';
    const res = await fetch(url);
    if (res.ok) {
      return {
        props: {
          posts: await res.json()
        }
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  // import Bebop from '$lib/components/Bebop.svelte';
  import Header from '$lib/components/Header.svelte';
  import translation from '$lib/translation.json';
  import PostsList from '$lib/components/Posts.svelte';
  import CodeSnippet from '$lib/components/Snippet.svelte';
  import language from '$lib/store.js';
  $: lang = $language;
  export let posts;
</script>


<!-- <Bebop /> -->


<section class="l-hero">
  <h1 class="m-title"><span class="m-subtitle">NicoNoClaste</span><span class="m-subtitle">ウェブデベロッパー<br>WEB DEVELOPER</span></h1>
</section>

<main class="g-contents">

  <Header current="home" />

  <article class="l-article" id="about">

    <header class="m-header">
      <h2 class="m-title">
        <span lang="{lang}">{translation.about.title[lang]}</span>
      </h2>
    </header>
    <section class="l-section">
      {#if lang == 'en'}
      <p lang="en"><strong>Nicolas</strong> (NicoNoClaste)</p>
      <p lang="en">born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p lang="en">10+ years <strong>Web Developer</strong></p>
      {:else}
      <p lang="ja"><strong>二コラ</strong> (ニコのクラスト)</p>
      <p lang="ja"><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>
      <p lang="ja">10年+ <strong>ウェブデベロッパー</strong></p>
      {/if}
      <p>HTML <strong>CSS</strong> Sass <strong>JS</strong> TypeScript <strong>Svelte</strong> Vue.js</p>
      <p><strong>Node.js</strong> GraphQL <strong>Ionic</strong> Wordpress <strong>PHP</strong> SQL ...</p>
      <!-- <p><strong>〈　</strong>A man <strong>MUST</strong> have a <strong>CODE</strong><strong>　〉</strong></p> -->

    </section>

    <footer class="m-footer">
      <p>→ <a href="/about">
        <strong lang="{lang}">{translation.about.more[lang]}</strong>
      </a> ←</p>
    </footer>
  </article>



  <article class="l-article" id="works">
    <header class="m-header">
      <h2 class="m-title">
        <span lang="{lang}">{translation.works.title[lang]}</span>
      </h2>
    </header>

    <section class="l-section">
      <PostsList display="list" posts={ posts.filter(post => (post.category === 'works'))} />
    </section>

    <footer class="m-footer">
      <p>→ <a href="/works">
        <strong lang="{lang}">{translation.works.more[lang]}</strong>
      </a> ←</p>
    </footer>

  </article>


  <article class="l-article" id="codes">
    <header class="m-header">
      <h2 class="m-title">
        <span lang="{lang}">{translation.codes.title[lang]}</span>
      </h2>
    </header>
    <section class="l-section">

      <CodeSnippet id="NWgvaOa" title="CSS only responsive slider" title_ja="CSSのみ レスポンシブ カルーセル" />

      <CodeSnippet id="abwyYRN" title="CSS only hamburger navigation" title_ja="CSSのみ ハンバーガー ナビ" />

      <CodeSnippet id="ExbKxPx" title="Responsive svg progress circle" title_ja="レスポンシブSVG進行サークル" />

      <!-- <CodeSnippet id="qBqjqrV" title="CSS only auto slide with reversed panels" title_ja="CSSのみ リバース縦スライド" /> -->

      <footer class="m-footer">
        <p>→ <a href="https://codepen.io/niconoclaste" target="_blank">
          <strong lang="{lang}">{translation.codes.more[lang]}</strong>
        </a> ←</p>
      </footer>

    </section>
  </article>

  <article class="l-article" id="articles">
    <header class="m-header">
      <h2 class="m-title">
        <span lang="{lang}">{translation.articles.title[lang]}</span>
      </h2>
    </header>

    <section class="l-section">

      <PostsList display="list" posts={ posts.filter(post => (post.category === 'articles'))} />

    </section>

    <footer class="m-footer">
      <p>→ <a href="/articles">
        <strong lang="{lang}">{translation.articles.more[lang]}</strong>
      </a> ←</p>
    </footer>

  </article>
</main>