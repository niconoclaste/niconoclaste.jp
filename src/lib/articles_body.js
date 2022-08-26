const glob_import = import.meta.glob(
	['/src/routes/articles/**/+page.svelte', '!/src/routes/articles/+page.svelte'],
	{eager: true}
);
const imports = Object.entries(glob_import);
const articles = [];
for (const path in imports) {
  const article = imports[path][1];
  if (article) {
    if (article.metadata) {
      const category = article.metadata.category;
      const url = path.replace('/src/routes', '').replace('+page.svelte', '');
      articles.push({
        category,
        url,
        ...article.metadata,
        ...article.default.render()
      });
    }
  }
}
articles.filter((article) => !article.hidden);
articles.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  )
export { articles };