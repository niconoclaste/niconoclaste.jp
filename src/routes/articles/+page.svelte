<script>
  import PostList from '$lib/components/Posts.svelte';
  import { articles } from '$lib/articles.js';
</script>

<!-- {#each articles.filter(post => (post.category === 'articles')) as post} -->
<!-- {#each articles as article}
<h2>{article.title}</h2>
{@html article.html}
{/each} -->


<PostList display="list" posts="{articles}" />