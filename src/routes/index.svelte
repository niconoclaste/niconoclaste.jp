<script context="module">
  import { title } from "/src/store.js";
	title.clear();
  import Header from '/src/components/Header.svelte';
  import Hero from '/src/components/Hero.svelte';
  import PostCard from '/src/components/Post-card.svelte';
  export const prerender = true;

  export const load = async({ fetch }) => {
		const url = '/writings/writings.json';
		const res = await fetch(url);
    
		if (res.ok) {
      const posts = await res.json();
			return {
				props: {
					posts
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
</script>
<Hero />

<section class="contents">

  <Header current="home" />

  <section class="top-bloc" id="about">
    <h2>About</h2>
    <div class="desc">
      <p><strong><ruby>Nicolas<rt>二コラ</rt></ruby></strong> (NicoNoClaste)</p>
      <p>made in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p>10+ years <strong>Web Developer</strong></p>
      <p>HTML <strong>CSS</strong> JS <strong>Svelte</strong> SCSS <strong>Vue.js</strong></p>
      <p>TypeScript <strong>Node.js</strong> GraphQL <strong>Ionic</strong> PHP ...</p>
      <p>-  A man <strong>MUST</strong> have a <strong>CODE</strong>  -</p>
    </div>
  </section>

  <section class="top-bloc" id="codes">
    <h2>Codes</h2>
    <div class="desc">

    </div>
  </section>

  <section class="top-bloc" id="writings">
    <h2>Writings</h2>
    <div class="desc">
      <PostCard posts={posts} />
    </div>
  </section>
</section>

<style global>
/* top sections */

.contents > .top-bloc:first-of-type{
  margin-top:-100vh;
}


.top-bloc{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25rem auto;
  background-color: mediumseagreen;
  background-color: #00a850;
  border-bottom:solid 3px #f9d605;
}
.top-bloc .desc{
  /* padding:40px 20px; */
  padding-bottom:10rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
}
.top-bloc h2,
.top-bloc .desc > p{
  text-shadow: 0 0 2px;
  color: #f9d600;
}
.top-bloc h2{
  font-weight: 900;
  text-transform: uppercase;
  font-size: 7rem;
  line-height: 1.1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-bloc .desc > p{
  font-weight: 900;
  margin-bottom: 0;
  word-break: keep-all;
  font-size: 3.2rem;
  text-align: center;
  line-height: 2.3;
  letter-spacing: 0.05rem;
}


/* top about section */
#about{
  background-color: mediumseagreen;
  background-color: #00a850;
}
#about h2{
  color: #f9d600;
}
#about p{
  color: #026236;
}
#about strong{
  color: #f9d600;
  font-weight: inherit;
  display: inline-block;
  line-height:1;
  font-size: 125%;
}

#codes{
  /* background:teal; */
}
#codes h2{
  /* color: #ffffff; */
}

#writings{
  /* background:indianred; */
}

#contact{
  /* background:#6176e0; */
}





</style>