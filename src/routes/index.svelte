<script>
  import { title } from "/src/store.js";
	title.clear();
	// title.set('hey');
  import Header from '/src/components/Header.svelte';
  import Hero from '/src/components/Hero.svelte';
  // import Snippet from '/src/components/Snippet.svelte';
  export const prerender = true;
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
      <p>- A man <strong>MUST</strong> have a <strong>CODE</strong> -</p>
    </div>
  </section>

  <section class="top-bloc" id="codes">
    <h2>Codes</h2>

    <div class="desc">
      <!-- <Snippet snippet="slider" /> -->
    </div>

  </section>

  <section class="top-bloc" id="blog">
    <h2>Blog</h2>
  </section>

  <section class="top-bloc" id="contact">
    <h2>Contact</h2>
  </section>
</section>




<style>
/* top sections */
.top-bloc p:last-of-type{
  margin-bottom:0;
}
.top-bloc .desc{
  padding:40px 20px;
}

/* top about section */
#about{
  background-color: mediumseagreen;
  background-color: #00a850;
  display:flex;
  justify-content:center;
}
#about h2,
#about p{
  text-shadow: 0 0 2px;
}
#about h2{
  font-weight: 900;
  text-transform: uppercase;
  font-size: 5rem;
  margin-bottom: 3rem;
  line-height: 1.1;
  text-align: center;
  color: #f9d600;
  display:block;
}
#about .desc{
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
}
#about p{
  color: #026236;
  font-weight: 900;
  margin-bottom: 0;
  word-break: keep-all;
  font-size: 3.2rem;
  text-align: center;
  line-height: 2.3;
  letter-spacing: 0.05rem;
}
#about strong{
  color: #f9d600;
  font-weight: inherit;
  display: inline-block;
  line-height:1;
  font-size: 125%;
}


#blog{
  background:yellow;
}





</style>