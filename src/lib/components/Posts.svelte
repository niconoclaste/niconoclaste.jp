<script>
  export let posts;
  export let display;
  import language from '$lib/store.js';
  $: lang = $language;
  $: dateSyle = lang === 'en' ? 'short' : 'long';
  $: langKey = function(key){
    return lang === 'en' ? key : key +'_'+ lang;
  }
</script>

{#if display === 'list'}
  <ul>
    {#each posts as post}
    <li lang="{lang}">
      <h2 class="m-title"><a href="{post.url}">{post[langKey('title')]}</a></h2>
      <p>{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</p>
      <p>exerpt : {post[langKey('excerpt')]}</p>
      {#if post[langKey('tags')]}
        <div class="tags" style="display:flex">tags : 
          {#each post[langKey('tags')].slice(0, 2) as tag}
          <span>{tag}, </span>
          {/each}
        </div>
      {/if}

    </li>
    {/each}
  </ul>

{:else if display === 'html'}
  {#each posts as post}
  <section>
    <h2 class="m-title" lang="{lang}">{post[langKey('title')]}</h2>
    {@html post.html}
  </section>
  {/each}

{:else if display === 'short'}
  <ul>
    {#each posts as post}
    <li lang="{lang}">
      <a href="{post.url}">
        <h2>{post[langKey('title')]}</h2>
        <h2>{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(post.date))}</h2>
      </a>
    </li>
    {/each}
  </ul>

 {/if} 