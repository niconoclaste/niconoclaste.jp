// let posts_articles = import.meta.globEager('/src/routes/articles/*.svelte');
// let posts_about = import.meta.globEager('/src/routes/about/*.svelte');
// const imports = Object.assign(posts_articles, posts_about);
const imports = import.meta.globEager('/src/routes/**/*.svelte');

const posts = [];
for (const path in imports) {
	const post = imports[path];
	if (post) {
    if (post.metadata) {
      // if(typeof post.default.render !== "undefined"){
        const category = post.metadata.category;
        const url = path.replace('/src/routes', '').replace('.svelte', '/');
        // const body = JSON.parse(...post.default.render());
        // const source = post.default.render();
        // const html = source;
        // console.log(source);

        // const html = post.default.render(function(renderHtml){
        //   console.log(renderHtml);
        // });
        // console.log(post.default.render.call());
        // console.log(post.default[0]);
        posts.push({
          category,
          url,
          ...post.metadata,
          ...post.default.render()
          // body
          // html
        });
      // }
    }
	}
}
posts.filter((post) => !post.hidden)
	.sort((a, b) =>
		new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0
	)

// posts.sort((a, b) =>
// new Date(a.date).getTime() > new Date(b.date).getTime()
//   ? -1
//   : new Date(a.date).getTime() < new Date(b.date).getTime()
//   ? 1
//   : 0
// );

const articles = posts.filter(post => post.category === 'articles');
const abouts = posts.filter(post => post.category === 'about');

// export default filteredPosts;
export { posts, articles, abouts };