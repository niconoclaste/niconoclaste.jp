<script>
  import { getContext } from 'svelte';
  let posts = getContext('articles');
  export let display = 'list';
  export let order = 'DESC';
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
</script>

{#if posts.length}
<!-- post list view -->
{#if display === 'list'}
  <ul class="m-posts-list">
    {#each posts as post}
    <li lang="{$language}">
      <a href="{post.url}">
        {#if post.thumb}
        <div class="m-posts-list_thumb">
          <img src="{post.thumb}" alt="{post[langKey('title')]}" class="img">
        </div>
        {/if}
        <div class="m-posts-list_body">
          <h2 class="title">{@html post[langKey('title')]}</h2>
          <p class="m-posts-list_desc">{@html post[langKey('excerpt')]}</p>
          <p class="m-posts-list_date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</p>
        </div>
        {#if post.tags}
        <div class="m-posts-list_tags">
          {#each post.tags as tag}
          <span>{tag}</span>
          {/each}
        </div>
        {/if}
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
    <li lang="{$language}">
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
  <h2 class="title" lang="{$language}">{translation.common.nopost[$language]}</h2>
</div>
{/if}