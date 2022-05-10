---
slug: article1
title: first article
title_ja: 初めての記事
date: 2022-01-17
excerpt: "My first article"
excerpt_ja: "初めての記事"
tags: [HTML]
tags_ja: [HTML]
category: articles
category_ja: excerpt_ja
top: true
#hidden
---

<script>
  // export let post;


</script>

  <h2 lang="en" class="m-title">{title}</h2>
  <h2 lang="ja" class="m-title">{title_ja}</h2>

  <h3 lang="en">{excerpt}</h3>
  <h3 lang="ja">{title_ja}</h3>

  <p lang="en">{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short'}).format(new Date(date))}</p>
  <p lang="ja">{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'long'}).format(new Date(date))}</p>

  <img src="http://www.niconoclaste.jp/img/code.jpg" alt="codes" width="800">