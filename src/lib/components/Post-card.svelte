<script>
  export let posts;
  // console.log(posts);
</script>

<!-- {#each posts as values, keys}
<h1>{values}</h1>
  {#each values as value, key} 
    <h1>{value}</h1>
    <p>{key}</p>
{/each}
<p>{keys}</p>
{/each} -->


  <ul>
    {#each posts as post}
      <li lang="en">
        <a href="{post.url}">
          <h2>{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short'}).format(new Date(post.date))}</h2>
          <h2>{post.title}</h2>
          <h2>category : {post.category}</h2>
          <p>{post.excerpt}</p>
        {#if post.tags}
          <div class="tags">
            {#each post.tags.slice(0, 2) as tag}
              <span>{tag}</span>
            {/each}
          </div>
        {/if}
        </a>
      </li>

      <li lang="ja">
        <a href="{post.url}">
          <h2>{new Intl.DateTimeFormat('ja-JP', {dateStyle: 'long'}).format(new Date(post.date))}</h2>
          <h2>{post.titleJa}</h2>
          <h2>カテゴリー : {post.categoryJa}</h2>
          <p>{post.excerptJa}</p>
        {#if post.tags}
          <div class="tags">
            {#each post.tags.slice(0, 2) as tag}
              <span>{tag}</span>
            {/each}
          </div>
        {/if}
        </a>
      </li>
    {/each}
    </ul>
    <br>
<hr>
  <h2>HTML :</h2>
  {#each posts as post}
  <section>
    <h2 lang="en">{post.title}</h2>
    <h2 lang="ja">{post.titleJa}</h2>
    {@html post.html}
  </section>
  {/each}