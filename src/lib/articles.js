const imports = import.meta.globEager('/src/routes/articles/*.svelte');
const articles = [];
for (const path in imports) {
  const article = imports[path];
  if (article) {
    if (article.metadata) {
      const category = article.metadata.category;
      const url = path.replace('/src/routes', '').replace('.svelte', '/');
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