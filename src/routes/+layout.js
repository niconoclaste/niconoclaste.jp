import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  let url = 'http://niconoclaste.jp/lib/works/';
  let res = await fetch(url);
  if (res.ok) {
    return {
  		works: await res.json()
		};
  }
  throw error(500, `Could not load ${url}`);
}
