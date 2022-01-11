import posts from '$lib/posts.js';
export async function get() {
  // const body = Object.keys(posts).slice(0, 4).map((slug) => ({
	const body = Object.keys(posts).map((slug) => ({
    slug,
    ...posts[slug],
  }));

	return {
    status: 200,
		body: JSON.stringify(body)
	};
}