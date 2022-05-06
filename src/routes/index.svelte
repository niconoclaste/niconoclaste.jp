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

  <article class="l-article" id="codes">
    <header class="m-header">
      <h2 class="m-title">
        <span lang="{lang}">{translation.codes.title[lang]}</span>
      </h2>
    </header>
    <section class="l-section">
      <div class="m-bloc">
        <h3 class="m-title">
          {#if lang == 'en'}
          <span lang="en">CSS only responsive slider</span>
          {:else}
          <span lang="ja">CSSのみ レスポンシブ カルーセル</span>
          {/if}
        </h3>
        <div class="pen-block">
          <iframe height="380" style="width: 100%;" scrolling="no" title="CSS only slider with controls and navigation" src="https://codepen.io/niconoclaste/embed/NWgvaOa?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/niconoclaste/pen/NWgvaOa">
            CSS only slider with controls and navigation</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>

      <div class="m-bloc">
        <h3 class="m-title">
          {#if lang == 'en'}
          <span lang="en">CSS only hamburger navigation</span>
          {:else}
          <span lang="ja">CSSのみ ハンバーガー ナビ</span>
          {/if}
        </h3>
        <div class="pen-block">
          <iframe height="380" style="width: 100%;" scrolling="no" title="CSS only hamburger navigation" src="https://codepen.io/niconoclaste/embed/abwyYRN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/niconoclaste/pen/abwyYRN">
            CSS only hamburger navigation</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>

      <div class="m-bloc">
        <h3 class="m-title">
          {#if lang == 'en'}
          <span lang="en">Responsive svg progress circle</span>
          {:else}
          <span lang="ja">レスポンシブSVG進行サークル</span>
          {/if}
        </h3>

        <div class="pen-block">
          <iframe height="380" style="width: 100%;" scrolling="no" title="Responsive svg progress circle " src="https://codepen.io/niconoclaste/embed/ExbKxPx?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/niconoclaste/pen/ExbKxPx">
            Responsive svg progress circle </a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>

      <div class="m-bloc">
        <h3 class="m-title">
          {#if lang == 'en'}
          <span lang="en">CSS only auto slide with reversed panels</span>
          {:else}
          <span lang="ja">レスポンシブSVG進行サークル</span>
          {/if}
        </h3>

        <div class="pen-block">
          <iframe height="380" style="width: 100%;" scrolling="no" title="CSS only auto slide with reversed panels" src="https://codepen.io/niconoclaste/embed/qBqjqrV?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/niconoclaste/pen/qBqjqrV">
              CSS only auto slide with reversed panels</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </div>

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
      <p>
      {#each posts as post}
      {#if post.category === 'articles' && post.top}
      <a href="{post.url}" lang="{lang}">
        {#if lang == 'en'}
        <strong>
          {post.title}
        </strong>
        <small>
          {new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short'}).format(new Date(post.date))}<br>
          {post.excerpt}
        </small>
        {:else}
        <strong>
          {post.titleJa}<br>
        </strong>
        <small>
          {new Intl.DateTimeFormat('ja-JP', {dateStyle: 'long'}).format(new Date(post.date))}<br>
          {post.excerptJa}
        </small>
        {/if}
      </a><br><br>
      {/if}
      {/each}
      </p>
    </section>
    <footer class="m-footer">
      <p>→ <a href="/articles">
        <strong lang="{lang}">{translation.articles.more[lang]}</strong>
      </a> ←</p>
    </footer>
  </article>
</main>