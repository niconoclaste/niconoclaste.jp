<script>
  import { getContext } from 'svelte';
  export let display = 'list';
  export let order = 'DESC';
  export let posts;
  // newest -> oldest
  if(order === 'ASC'){
    // oldest -> newest
    posts.sort((a, b) =>
    new Date(a.date).getTime() < new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() > new Date(b.date).getTime()
      ? 1
      : 0
  )};

  export let show = false;
  if(show){
    posts = posts.slice(0, show);
  }

  import language from '$lib/store.js';
  $: dateSyle = $language === 'en' ? 'short' : 'long';
  $: langKey = function(key){
    return $language === 'en' ? key : key +'_'+ $language;
  }
  import translation from '$lib/translation.json';

  function nth(nb){
    return nb < 11 || nb > 13 ? nb + ['st', 'nd', 'rd', 'th'][Math.min((nb - 1) % 10, 3)] : nb + 'th';
  }

</script>

{#if posts.length}
<!-- post list view -->
{#if display === 'list'}
  <ul class="m-posts-list">
    {#each posts as post}
    <li>
      <a href="{post.url}">
        {#if post.thumb}
        <div class="m-posts-list_thumb">
          <img src="{post.thumb}" alt="{post[langKey('title')]}" class="img">
        </div>
        {/if}

        <div class="m-posts-list_body">
          <p class="m-posts-list_category">{@html post[langKey('category')]}</p>
          <h2 class="title">{@html post[langKey('title')]}</h2>
          <p class="m-posts-list_date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</p>
          <p class="m-posts-list_desc">{@html post[langKey('excerpt')]}</p>
          {#if post.series && $language === 'en'}
          <p class="m-post-list_series">This article is the {nth(post.series_nb)} part of the [{post.series}] series.</p>
          {:else if post.series}
          <p class="m-post-list_series">この記事は[{post.series}]シリーズの{post.series_nb}番目の記事です。</p>
          {/if}
          <p class="m-posts-list_readmore">{translation.articles.readmore[$language]}</p>
          {#if post.tags}
          <div class="m-posts-list_tags">{#each post.tags as tag}<span>{tag}</span>{/each}</div>
          {/if}
        </div>
      </a>
    </li>
    {/each}
  </ul>

<!-- post full HTML view -->
<!-- {:else if display === 'html'}
  {#each posts as post}
  <div class="m-bloc">
    <h2 class="title" lang="{$language}">{post[langKey('title')]}</h2>
    <div class="m-contents-bloc">
      {@html post.html}
    </div>
  </div>
  {:else}
  <div class="m-bloc">
    <h2 class="title" lang="{$language}">{translation.common.nopost[$language]}</h2>
  </div>
  {/each} -->

<!-- side bar list -->
{:else if display === 'short'}
  <ul>
    {#each posts as post}
    <li>
      <a href="{post.url}">
        <h2>{post[langKey('title')]}</h2>
        <h2>{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</h2>
      </a>
    </li>
    {/each}
  </ul>
{/if}

<!-- no post -->
{:else}
<div class="m-bloc">
  <h2 class="title">{translation.common.nopost[$language]}</h2>
</div>
{/if}