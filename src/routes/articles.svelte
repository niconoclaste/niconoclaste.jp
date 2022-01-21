<script context="module">
  export const load = async({ fetch }) => {
		const url = '/api/posts.json';
		const res = await fetch(url);
    
		if (res.ok) {
      let posts = await res.json();
      posts = posts.filter(post => post.category === 'articles');
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
  import Postcard from '/src/components/Post-card.svelte';
  export let posts;
</script>

      <p>ARTICLES !!!</p>

<Postcard {posts} />