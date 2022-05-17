<script>

// add form with google forms ?
// https://docs.google.com/forms/d/1MHszMnPFfrLCU88Q0OQKfBdzwhkvNrbrEscQSpv0-Ew/edit
// https://www.youtube.com/watch?v=mBXEnakkUIM

// stores & context API
// https://www.arzidava.com/blog/svelte-contextapi-stores/



  // import Bebop from '$lib/components/Bebop.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Header from '$lib/components/Header.svelte';
  import translation from '$lib/translation.json';
  import PostsList from '$lib/components/Posts.svelte';
  import CodeSnippet from '$lib/components/Snippet.svelte';
  import language from '$lib/store.js';

  import posts from '$lib/works.json';
  let works = posts.filter((post) => !post.hidden && post.top);
  works.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0);

  import { getContext } from 'svelte';
  export let articles = getContext('articles');
</script>
<!-- <Bebop /> -->

<section class="l-hero">
  <Hero />
</section>

<main class="g-main">

  <Header current="home"  />

  <article class="l-article" id="about">

    <header class="m-header">
      <h2 class="title">
        <span lang="{$language}">{translation.about.title[$language]}</span>
      </h2>
    </header>
    <section class="l-section">
      {#if $language == 'en'}
      <p lang="en"><strong>Nicolas</strong> (NicoNoClaste)</p>
      <p lang="en">born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p lang="en">10+ years <strong>Web Developer</strong></p>
      {:else}
      <p lang="ja"><strong>二コラ</strong> (ニコのクラスト)</p>
      <p lang="ja"><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>
      <p lang="ja">10年+ <strong>ウェブデベロッパー</strong></p>
      {/if}

      <p>
        HTML <strong>CSS</strong> SCSS <strong>JavaScript</strong> TypeScript<br>
        <strong>Svelte</strong> Vue <strong>Eleventy</strong> Astro<br>
        <strong>Node</strong> Ionic <strong>PHP</strong> SQL <strong>WordPress</strong> ...
        <!-- <strong>Cypress</strong> JSDoc <strong>PHP</strong> SQL <strong>WordPress</strong> ... -->
      </p>
      <!-- <p>like<br>, <strong>TypeScript</strong>, <strong>Vue</strong>, <strong>Eleventy</strong>, , <strong>SQL</strong></p>
      <p>can<br><strong>Node</strong>, <strong>Ionic</strong>, <strong>Cypress</strong>, <strong>Wordpress</strong></p> -->
      <!-- <p>HTML <strong>CSS</strong> Sass <strong>JS</strong> TypeScript <strong>Svelte</strong> Vue.js<br>
      <strong>Node</strong> Cypress <strong>Eleventy</strong> GraphQL<br><strong>Ionic</strong> Wordpress <strong>PHP</strong> SQL ...</p> -->
      <!-- <p><strong>〈　</strong>A man <strong>MUST</strong> have a <strong>CODE</strong><strong>　〉</strong></p> -->

    </section>

    <footer class="m-footer">
      <p><a href="/about"><strong lang="{$language}">{translation.about.more[$language]}</strong></a></p>
    </footer>

  </article>

  {#if works.length > 0}
  <article class="l-article" id="works">
    <header class="m-header">
      <h2 class="title">
        <span lang="{$language}">{translation.works.title[$language]}</span>
      </h2>
    </header>

    <section class="l-section">
      <div class="m-bloc">
        <ul class="m-posts-list">
          {#each works as work, i}
          {#if i < 8}
          <li lang="{$language}" data-hidden="{work.hidden}" data-status="{work.status}" data-modified="{work.modified}" data-category="{work.category}">
            <a href="{work.link}" target="_blank" rel="noopener">
              {#if work.thumb}
              <div class="m-posts-list_thumb">
                <img src="{work.thumb}" alt="{work.title[$language]}" class="img">
              </div>
              {/if}
              <div class="m-posts-list_body">
                <h2 class="title">{work.title[$language]}</h2>
                <p class="m-posts-list_desc">{work.client[$language]}</p>
                <!-- <p class="m-posts-list_date">
                  {#if $language === 'en'}
                  {new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit'}).format(new Date(work.date))}
                  {:else}
                  {new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(work.date))}{new Intl.DateTimeFormat('ja-JP', {month: 'numeric'}).format(new Date(work.date))}
                  {/if}
                </p> -->
              </div>
              {#if work.tags}
              <div class="m-posts-list_tags">
                {#each work.tags as tag}
                <span class="m-logo-icon" style="background-image:var(--logo_{tag})" title="{tag}">{tag}</span>
                {/each}
              </div>
              {/if}
            </a>
          </li>
          {/if}
          {/each}
        </ul>
      </div>
    </section>

    {#if works.length > 8}
    <footer class="m-footer">
      <p><a href="/works"> <strong lang="{$language}">{translation.works.more[$language]}</strong></a></p>
    </footer>
    {/if}
  </article>
  {/if}

  <article class="l-article" id="codes">
    <header class="m-header">
      <h2 class="title">
        <span lang="{$language}">{translation.codes.title[$language]}</span>
      </h2>
    </header>
    <section class="l-section">

      <CodeSnippet id="NWgvaOa" title="CSS only responsive slider" title_ja="CSSのみ レスポンシブ カルーセル" />

      <CodeSnippet id="abwyYRN" title="CSS only hamburger navigation" title_ja="CSSのみ ハンバーガー ナビ" />

      <CodeSnippet id="ExbKxPx" title="Responsive svg progress circle" title_ja="レスポンシブSVG進行サークル" />

      <!-- <CodeSnippet id="qBqjqrV" title="CSS only auto slide with reversed panels" title_ja="CSSのみ リバース縦スライド" /> -->

    </section>
    <footer class="m-footer">
      <p><a href="https://codepen.io/niconoclaste" target="_blank" rel="noopener"><strong lang="{$language}">{translation.codes.more[$language]}</strong></a></p>
    </footer>
  </article>

  {#if articles.length > 0}
  <article class="l-article" id="articles">
    <header class="m-header">
      <h2 class="title">
        <span lang="{$language}">{translation.articles.title[$language]}</span>
      </h2>
    </header>

    <section class="l-section">
      <div class="m-bloc">
        <PostsList display="list" />
      </div>
    </section>

    <footer class="m-footer">
      <p><a href="/articles"><strong lang="{$language}">{translation.articles.more[$language]}</strong></a></p>
    </footer>
  </article>
{/if}
</main>