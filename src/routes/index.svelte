<script>

// add form with google forms ?
// https://docs.google.com/forms/d/1MHszMnPFfrLCU88Q0OQKfBdzwhkvNrbrEscQSpv0-Ew/edit
// https://www.youtube.com/watch?v=mBXEnakkUIM

  // import Bebop from '$lib/components/Bebop.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Header from '$lib/components/Header.svelte';
  import translation from '$lib/translation.json';
  import PostsList from '$lib/components/Posts.svelte';
  import CodeSnippet from '$lib/components/Snippet.svelte';
  import language from '$lib/store.js';
  import { getContext } from 'svelte';
  import { settings } from '$lib/settings.js';
  import { articles } from '$lib/articles.js';

  let showWorks = getContext('showWorks');
  let showArticles = getContext('showArticles');

  let allWorks = getContext('works').filter((work) => !work.hidden);

  let topWorks = allWorks.filter((work) => work.top).sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0).slice(0, settings.maxWorks);

  let topArticles = articles.filter((article) => article.top).sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0).slice(0, settings.maxArticles);

  $: dateOutput = (date) => $language === 'en' ? new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(new Date(date)) : new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(date));
  
</script>
<!-- <Bebop /> -->

<section class="l-hero">
  <Hero />
</section>

<main class="g-main">

  <Header current="home" layout="home" />

  <article class="l-article" id="about">

    <header class="m-header">
      <h2 class="title">{translation.about.title[$language]}</h2>
    </header>
    <section class="l-section">
    {#if $language == 'en'}
      <p><strong>Nicolas</strong> (NicoNoClaste)</p>
      <p>born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p>10+ years <strong>Web Developer</strong></p>
    {:else}
      <p><strong>二コラ</strong> (ニコのクラスト)</p>
      <p><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>
      <p>10年+ <strong>ウェブデベロッパー</strong></p>
    {/if}

      <p>
        HTML&nbsp;<strong>CSS</strong>&nbsp;SCSS <strong>JavaScript</strong>&nbsp;TypeScript<br>
        <strong>Svelte</strong>&nbsp;Vue <strong>Eleventy</strong>&nbsp;Astro<br>
        <strong>Node</strong>&nbsp;Ionic&nbsp;<strong>PHP</strong> SQL&nbsp;<strong>WordPress</strong> ...
      </p>
    </section>

    <!-- <footer class="m-footer">
      <p><a href="/about"><strong lang="{$language}">{translation.about.more[$language]}</strong></a></p>
    </footer> -->

  </article>

{#if showWorks === true}
  <article class="l-article" id="works">
    <header class="m-header">
      <h2 class="title">{translation.works.title[$language]}</h2>
    </header>

    <section class="l-section">
      <div class="m-bloc" id="top-works">
        <ul class="m-works-list">
        {#each topWorks as work}
          <li>
            <a href="{work.link}" target="_blank" rel="noopener">
            {#if work.thumb}
              <div class="m-works-list_thumb">
                <img src="{work.thumb}" alt="{work.title[$language]}" class="img" loading="lazy">
              </div>
            {/if}
              <div class="m-works-list_body">
                <h2 class="title">{work.title[$language]}</h2>
                <p class="m-works-list_desc"><small>{work.client[$language] !== work.title[$language] ? work.client[$language]+' ' : ''}({dateOutput(work.date)})</small></p>
                <!-- <p class="m-works-list_desc"><small>{dateOutput(work.date)}</small></p> -->
              </div>
            {#if work.techs}
              <div class="m-works-list_tags">
              {#each work.techs as tech}
                <span class="m-logo-icon" style="background-image:var(--logo_{tech})" title="{tech}">{tech}</span>
              {/each}
              </div>
            {/if}
            </a>
          </li>
        {/each}
        </ul>
      </div>
    </section>

  {#if allWorks.length > settings.maxWorks}
    <footer class="m-footer">
      <p><a href="/works"> <strong>{translation.works.more[$language]}</strong></a></p>
    </footer>
  {/if}
  </article>
{/if}

  <article class="l-article" id="codes">
    <header class="m-header">
      <h2 class="title">{translation.codes.title[$language]}</h2>
    </header>
    <section class="l-section">

      <CodeSnippet id="NWgvaOa" title="CSS only responsive slider" title_ja="CSSのみ レスポンシブ カルーセル" />

      <!-- <CodeSnippet id="abwyYRN" title="CSS only hamburger navigation" title_ja="CSSのみ ハンバーガー ナビゲーション" /> -->

      <CodeSnippet id="ExbKxPx" title="Responsive svg progress circle" title_ja="レスポンシブSVG進行サークル" />

      <CodeSnippet id="poadjOL" title="STAR WARS opening" title_ja="スターウォーズ オープニング" />

    </section>
    <footer class="m-footer">
      <p><a href="https://codepen.io/niconoclaste" target="_blank" rel="noopener"><strong>{translation.codes.more[$language]}</strong></a></p>
    </footer>
  </article>

{#if showArticles === true}
  <article class="l-article" id="articles">
    <header class="m-header">
      <h2 class="title">{translation.articles.title[$language]}</h2>
    </header>

    <section class="l-section">
      <div class="m-bloc">
        <PostsList display="list" posts={topArticles} />
      </div>
    </section>

    <footer class="m-footer">
      <p><a href="/articles"><strong>{translation.articles.more[$language]}</strong></a></p>
    </footer>
  </article>
{/if}
</main>