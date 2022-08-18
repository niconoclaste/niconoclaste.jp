import { articles } from '$lib/articles.js';
export async function get() {
  const body = Object.keys(articles).map((slug) => ({
    slug,
    ...articles[slug]
  }));
  return {
    status: 200,
    body: JSON.stringify(body)
  };
}