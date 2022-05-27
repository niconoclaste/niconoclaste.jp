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
  import worksList from '$lib/works.json';
  import { getContext } from 'svelte';
  import { settings } from '$lib/settings.js';

  let maxPosts = settings.maxPosts;

  let works = worksList.filter((work) => !work.hidden && work.top);
  let allWorks = works.length;
  works.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0);
  works = works.slice(0, maxPosts);

  let articles = getContext('articles').filter((article) => !article.hidden && article.top);
  articles.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0);
  articles = articles.slice(0, maxPosts);
  
</script>
<!-- <Bebop /> -->

<section class="l-hero">
  <Hero />
</section>

<main class="g-main">

  <Header current="home" layout="home" />

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
      </p>
    </section>

    <!-- <footer class="m-footer">
      <p><a href="/about"><strong lang="{$language}">{translation.about.more[$language]}</strong></a></p>
    </footer> -->

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
        <ul class="m-works-list">
          {#each works as work}
          <li lang="{$language}">
            <a href="{work.link}" target="_blank" rel="noopener">
              {#if work.thumb}
              <div class="m-works-list_thumb">
                <img src="{work.thumb}" alt="{work.title[$language]}" class="img">
              </div>
              {/if}
              <div class="m-works-list_body">
                <h2 class="title">{work.title[$language]}</h2>
                <p class="m-works-list_desc">{work.client[$language]}</p>
              </div>
              {#if work.tags}
              <div class="m-works-list_tags">
                {#each work.tags as tag}
                <span class="m-logo-icon" style="background-image:var(--logo_{tag})" title="{tag}">{tag}</span>
                {/each}
              </div>
              {/if}
            </a>
          </li>
          {/each}
        </ul>
      </div>
    </section>

    {#if allWorks > maxPosts}
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

      <CodeSnippet id="abwyYRN" title="CSS only hamburger navigation" title_ja="CSSのみ ハンバーガー ナビゲーション" />

      <CodeSnippet id="ExbKxPx" title="Responsive svg progress circle" title_ja="レスポンシブSVG進行サークル" />

      <CodeSnippet id="poadjOL" title="STAR WARS opening" title_ja="スターウォーズ オープニング" />

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
        <PostsList display="list" posts={articles} />
      </div>
    </section>

    <footer class="m-footer">
      <p><a href="/articles"><strong lang="{$language}">{translation.articles.more[$language]}</strong></a></p>
    </footer>
  </article>
{/if}
</main>