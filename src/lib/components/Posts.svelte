<script>
  export let posts;
  export let display;
  import language from '$lib/store.js';
  // $: lang = $language;
  $: dateSyle = $language === 'en' ? 'short' : 'long';
  $: langKey = function(key){
    return $language === 'en' ? key : key +'_'+ $language;
  }
</script>

{#if display === 'list'}
<!-- post list view -->
  <ul class="m-posts-list">
    {#each posts as post}
    {new Date(post.date)}<br>
    <li lang="{$language}">
      <h2 class="m-title"><a href="{post.url}">{post[langKey('title')]}</a></h2>
      <p>{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</p>
      <p>exerpt : {post[langKey('excerpt')]}</p>
      {#if post[langKey('tags')]}
        <div class="m-post-tags" style="display:flex">tags : 
          {#each post[langKey('tags')].slice(0, 2) as tag}
          <span>{tag}, </span>
          {/each}
        </div>
      {/if}
    </li>
    {/each}
  </ul>

{:else if display === 'html'}
<!-- post full HTML view -->
  {#each posts as post}
  <div class="m-bloc">
    <h2 class="m-title" lang="{$language}">{post[langKey('title')]}</h2>
    <div class="m-contents-bloc">
      {@html post.html}
    </div>
  </div>
  {/each}

{:else if display === 'short'}
<!-- side bar list -->
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