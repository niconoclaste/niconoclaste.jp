const imports = import.meta.globEager('/src/routes/about/*.svelte');
const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post.metadata) {
    posts.push({
      ...post.metadata,
      ...post.default.render()
    });
  }
}
const filteredPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  )

export async function get() {
	const body = Object.keys(filteredPosts).map((slug) => ({
    slug,
    ...filteredPosts[slug],
  }));

	return {
    status: 200,
		body: JSON.stringify(body)
	};
}