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
  import Header from '$lib/components/Header.svelte';
</script>
<script>
  export let posts;
</script>



<section class="hero">
  <h1><span>NicoNoClaste</span><span>ウェブデベロッパー<br>WEB DEVELOPER</span></h1>
</section>

<section class="contents">

  <Header current="home" />

  <section class="top-bloc" id="about">
    <h2><span lang="en">About</span><span lang="ja">について</span></h2>
    <div class="desc">
      <p lang="en"><strong>Nicolas</strong> (NicoNoClaste)</p>
      <p lang="ja"><strong>二コラ</strong> (ニコのクラスト)</p>

      <p lang="en">born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p lang="ja"><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>

      <p lang="en">10+ years <strong>Web Developer</strong></p>
      <p lang="ja">10年+ <strong>ウェブデベロッパー</strong></p>

      <p>HTML <strong>CSS</strong> Sass <strong>JS</strong> TypeScript <strong>Svelte</strong> Vue.js</p>
      <p><strong>Node.js</strong> GraphQL <strong>Ionic</strong> Wordpress <strong>PHP</strong>...</p>
      <!-- <p><strong>〈　</strong>A man <strong>MUST</strong> have a <strong>CODE</strong><strong>　〉</strong></p> -->

      <p>→ <a href="/about"><strong lang="en">READ MORE</strong><strong lang="ja">もっと見る</strong></a> ←</p>
    </div>
  </section>

  <section class="top-bloc" id="codes">
    <h2><span lang="en">Codes</span><span lang="ja">コード</span></h2>
    <div class="desc">
      <div style="width:100%;max-width:1000px;margin-bottom:40px">
        <iframe height="650" style="width: 100%;" scrolling="no" title="CSS only slider with controls and navigation" src="https://codepen.io/niconoclaste/embed/NWgvaOa?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/niconoclaste/pen/NWgvaOa">
          CSS only slider with controls and navigation</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>

      <div style="width:100%;max-width:1000px">
        <iframe height="300" style="width: 100%;" scrolling="no" title="simple draggable slider" src="https://codepen.io/niconoclaste/embed/dyRQZNy?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/niconoclaste/pen/dyRQZNy">
          simple draggable slider</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
      <!-- <p>→ <a href="/codes"><strong lang="en">READ MORE</strong><strong lang="ja">もっと見る</strong></a> ←</p> -->
    </div>
  </section>

  <section class="top-bloc" id="articles">
    <h2><span lang="en">Articles</span><span lang="ja">ライティングス</span></h2>
    <div class="desc">
      <p>
      {#each posts as post}
      {#if post.category === 'articles' && post.top}
      <a href="{post.url}">
        <strong lang="en">
        {post.title}<br>
        <small>
          {new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short'}).format(new Date(post.date))}<br>
          {post.excerpt}
        </small>
      </strong>
      <strong lang="ja">
        {post.titleJa}<br>
        <small>
          {new Intl.DateTimeFormat('ja-JP', {dateStyle: 'long'}).format(new Date(post.date))}<br>
          {post.excerptJa}
        </small>
      </strong>
      </a><br><br>
      {/if}
      {/each}
      </p>
      <p>→ <a href="/articles"><strong lang="en">READ MORE</strong><strong lang="ja">もっと見る</strong></a> ←</p>
    </div>
  </section>
</section>