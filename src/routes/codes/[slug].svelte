<script context="module">
  const allPosts = import.meta.globEager('/src/codes/*.svelte');
  let posts = [];
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = post.metadata.slug;
    const p = { post, slug };
    posts.push(p);
  }

  export function load({ params}) {
    const { slug } = params;
    const filteredPost = posts.find((p) => {
      return p.slug.toLowerCase() === slug.toLowerCase();
    });
    return {
      props: {
        page: filteredPost.post.default
      }
    };
  };
</script>

<script>
  export let page;
</script>

<svelte:component this={page}/>