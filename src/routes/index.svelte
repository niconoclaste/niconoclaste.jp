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
    <div class="desc">
      <h2>About</h2>
      <p><strong><ruby>Nicolas<rt>二コラ</rt></ruby></strong> (NicoNoClaste)</p>
      <p>made in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
      <p>10+ years <strong>Web Developer</strong></p>
      <p>HTML <strong>CSS</strong> JS <strong>Svelte</strong> SCSS <strong>Vue.js</strong></p>
      <p>TypeScript <strong>Node.js</strong> GraphQL <strong>Ionic</strong> PHP ...</p>
      <p>-  A man <strong>MUST</strong> have a <strong>CODE</strong>  -</p>
    </div>
  </section>

  <section class="top-bloc" id="codes">
    <div class="desc">
      <h2>Codes</h2>

    </div>

  </section>

  <section class="top-bloc" id="writings">
    <div class="desc">
      <h2>Writings</h2>
      <PostCard posts={posts} />
    </div>
  </section>

  <section class="top-bloc" id="contact">
    <div class="desc">
      <h2>Contact</h2>

    </div>
  </section>
</section>

<style global>
/* top sections */
.top-bloc p:last-of-type{
  margin-bottom:0;
}
.top-bloc{
  display:flex;
  justify-content:center;
}

.top-bloc .desc{
  padding:40px 20px;
}
.top-bloc .desc > h2,
.top-bloc .desc > p{
  text-shadow: 0 0 2px;
}
.top-bloc .desc > h2{
  font-weight: 900;
  text-transform: uppercase;
  font-size: 5rem;
  margin-bottom: 3rem;
  line-height: 1.1;
  text-align: center;
  display:block;
}
.top-bloc .desc{
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  justify-content: space-between;
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
  background:teal;
}
#codes h2{
  color: #ffffff;
}

#writings{
  background:yellow;
}





</style>