<script context="module">
  export const load = async({ fetch }) => {
		const url = './posts.json';
		const res = await fetch(url);
    
		if (res.ok) {
      let posts = await res.json();
      posts = posts.filter(post => post.category === 'about');
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
  import { title } from "/src/store.js";
  // import { getContext } from 'svelte';
	title.set('About');
  // getContext('setLayout')('inside');
  export let posts;
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

      <p>ABOUT !!!</p>

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