<script context="module">
  import { title } from "/src/store.js";
	title.clear();
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
  // import PostCard from '/src/components/Post-card.svelte';
  export const prerender = true;

  export const load = async({ fetch }) => {
		const url = 'posts.json';
		const res = await fetch(url);
    
		if (res.ok) {
      let posts = await res.json();
      posts = posts
			return {
				props: {
					posts : posts 
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
  export let posts;
  export let testPosts = posts.filter(post => post.category === 'test');
  export let aboutPosts = posts.filter(post => post.category === 'about');
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>


<section class="hero">
  <h1><span>NicoNoClaste</span><span>ウェブデベロッパー<br>WEB DEVELOPER</span></h1>
</section>

<section class="contents">

  <Header current="home" />

  <section class="top-bloc" id="about">
    <h2><ruby>About<rt>について</rt></ruby></h2>
    <div class="desc">
      <p><strong><ruby>Nicolas<rt>二コラ</rt></ruby></strong> (NicoNoClaste)</p>
      <p>made in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p>10+ years <strong>Web Developer</strong></p>
      <p>HTML <strong>CSS</strong> JS <strong>Svelte</strong> SCSS <strong>Vue.js</strong> TypeScript</p>
      <p><strong>Node.js</strong> GraphQL <strong>Ionic</strong> Wordpress <strong>PHP</strong> ...</p>
      <p><strong>〈　</strong>A man <strong>MUST</strong> have a <strong>CODE</strong><strong>　〉</strong></p>

      <p>
        {#each aboutPosts as post}
        <a href="{post.url}"><strong>{post.title}</strong></a><br>
        {/each}
      </p>

      <p><a href="/about"><strong>SEE MORE</strong></a></p>
    </div>
  </section>

  <section class="top-bloc" id="codes">
    <h2><ruby>Codes<rt>コード</rt></ruby></h2>
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
      <p><a href="/codes"><strong>SEE MORE</strong></a></p>
    </div>
  </section>

  <section class="top-bloc" id="articles">
    <!-- <h2><ruby>Scribbles<rt> スクリブルス</rt></ruby></h2> -->
    <h2><ruby>Articles<rt>ライティングス</rt></ruby></h2>
    <div class="desc">
      <!-- <PostCard posts={posts} /> -->
    </div>
  </section>

  <section class="top-bloc" id="test">
    <h2><ruby>test<rt>テスト</rt></ruby></h2>
    <div class="desc">
      <p>
      {#each testPosts as post}
      <a href="{post.url}"><strong>{post.title}</strong></a><br>
      {/each}
      </p>
      <!-- <PostCard posts={posts} /> -->
    </div>
  </section>
</section>

<Footer />