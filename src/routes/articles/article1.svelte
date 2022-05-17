---
slug: article1
title: first article
title_ja: 初めての記事
date: 2022-01-17
excerpt: "This is my very first article !"
excerpt_ja: "これは僕の最初の記事です！"
tags: [HTML]
tags_ja: [HTML]
category: articles
category_ja: excerpt_ja
top: true
#hidden
---

<script>
  // export let post;
  import language from '$lib/store.js';

</script>
{#if $language == 'en'}
  <h3 lang="en" class="title">{excerpt}</h3>
  <p lang="en" class="m-article-date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short'}).format(new Date(date))}</p>
  

{:else}
  <h3 lang="ja" class="title">{excerpt_ja}</h3>
  <p lang="ja" class="m-article-date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'long'}).format(new Date(date))}</p>

{/if}
  <br>
  <img src="http://www.niconoclaste.jp/img/code.jpg" alt="codes" width="800" class="img">