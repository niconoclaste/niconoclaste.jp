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
  import PostList from '$lib/components/Posts.svelte';
  export let posts;
</script>

<PostList display="list" posts={ posts.filter(post => (post.category === 'articles'))} />