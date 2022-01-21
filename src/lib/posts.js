const imports = import.meta.globEager('/src/routes/**/*.svelte');
const posts = [];
for (const path in imports) {
	const post = imports[path];
	if (post) {
    if (post.metadata) {
      const category = post.metadata.category;
      const url = path.replace('/src/routes', '').replace('.svelte', '/');
      posts.push({
        category,
        url,
        ...post.metadata,
        ...post.default.render()
      });
    }
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

export default filteredPosts;