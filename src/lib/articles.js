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
      const category = 'articles';
      const url = '/articles/'+article.metadata.slug;
      articles.push({
        category,
        url,
        ...article.metadata,
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