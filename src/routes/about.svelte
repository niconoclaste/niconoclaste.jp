<script context="module">
  import { title } from "/src/store.js";
	title.set('About');
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;

  export const load = async({ fetch }) => {
		const url = 'about.json';
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
  console.log(posts);
</script>

<!-- 





<script context="module">
  import { title } from "/src/store.js";
	title.set('Codes');
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
	export const prerender = true;


  const imports = import.meta.globEager('./about/*.svelte');

  const posts = [];
  for (const path in imports) {
    const post = imports[path];
    console.log(post);
    if (post) {
      posts.push({
        post,
        ...post.metadata,
        // ...post.default.render()
      });
    }
  }




  // const allPosts = import.meta.globEager('./about/*.svelte');
  // let posts = [];
  // for (let path in allPosts) {
  //   const post = allPosts[path];
  //   if(post.metadata){
  //     posts.push({ 
  //       ...post.default,
  //       ...post.metadata,
  //       // ...post.default.render()
  //     });
  //   }
  // }
  console.log(posts);
</script> -->



<section class="contents">
  <Header current="about" />
  <section class="top-bloc">

    <div class="desc">
      <p>My About !!!</p>

      <ul>
        {#each posts as post}
          <li>
            <a href="/about/{post.slug}">
              <h2>{post.title}</h2>
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
