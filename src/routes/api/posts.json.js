import { posts } from '$lib/postsbody.js';
export async function get() {
  const body = Object.keys(posts).map((slug) => ({
    slug,
    ...posts[slug]
  }));
  return {
    status: 200,
    body: JSON.stringify(body)
  };
}