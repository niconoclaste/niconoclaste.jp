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
</script>
<script>
  import Postcard from '$lib/components/Post-card.svelte';
  export let posts;
</script>

<p lang="en">ARTICLES !!!</p>
<p lang="ja">ライティングス !!!</p>

<Postcard posts={ posts.filter(post => (post.category === 'articles'))} />