<script context="module">
  // export async function load({ fetch }) {
  //   const url = '/api/articles.json';
  //   const res = await fetch(url);
  //   if (res.ok) {
  //     return {
  //       props: {
  //         articles: await res.json()
  //       }
  //     };
  //   }
  //   return {
  //     status: res.status,
  //     error: new Error(`Could not load ${url}`)
  //   };
  // }
</script>
<script>
  import PostList from '$lib/components/Posts.svelte';
  import { articles } from '$lib/articles.js';
  // export let articles;
</script>

<!-- {#each articles.filter(post => (post.category === 'articles')) as post} -->
<!-- {#each articles as article}
<h2>{article.title}</h2>
{@html article.html}
{/each} -->


<PostList display="list" posts="{articles}" />