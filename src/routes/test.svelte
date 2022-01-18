<script context="module">
  import { title } from "/src/store.js";
	title.set('test');
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;

	export async function load({ fetch }) {
		const url = 'posts.json';
		const res = await fetch(url);
    let posts = await res.json();
    return {
      props: {
        posts: posts = posts.filter(post => post.category === 'test')
      }
    };
	}
</script>

<script>
  export let posts;
</script>

<section class="contents">
  <Header current="test" />
  <section class="top-bloc">

    <div class="desc">
      <p>TEST !!!</p>

      <ul>
        {#each posts as post}
          <li>
            <a href="{post.url}">
              <h2>{new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'long', year: 'numeric', month: 'numeric', day: 'numeric'}).format(new Date(post.date))}</h2>
              <h2>{new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date(post.date))}</h2>
              <h2>{post.title}</h2>
              <h2>category : {post.category}</h2>
              <p>{post.excerpt}</p>
            {#if post.tags}
              <div class="tags">
                {#each post.tags.slice(0, 2) as tag}
                  <span>{tag}</span>
                {/each}
              </div>
            {/if}
            </a>
          </li>
        {/each}
        </ul>

      {#each posts as post}
      <section>
        <h2>{post.title}</h2>
        {@html post.html}
      </section>
      {/each}
    </div>
  </section>
  <Footer/>
</section>


<style>
  ul{
    list-style:none;
  }
  ul li{
    margin-bottom:15px;
  }
  ul li a{
    color:black;
  }
</style>