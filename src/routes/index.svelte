<script context="module">
  export const load = async({ fetch }) => {
		const url = '/api/posts.json';
		const res = await fetch(url);
		if (res.ok) {
      let posts = await res.json();
      posts = posts;
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
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';

  export let posts;
  export let articles = posts.filter(post => post.category === 'articles');
  export let aboutPosts = posts.filter(post => post.category === 'about');
</script>



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
    <h2><ruby>Articles<rt>ライティングス</rt></ruby></h2>
    <div class="desc">
      <p>
      {#each articles as post}
      <a href="{post.url}"><strong>{post.title}</strong></a><br>
      {/each}
      </p>
      <p><a href="/articles"><strong>SEE MORE</strong></a></p>
    </div>
  </section>
</section>

<Footer />