<script>
  export let posts;
</script>

  <ul>
    {#each posts as post}
      <li>
        <a href="{post.url}">
          <h2>{new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'long', year: 'numeric', month: 'numeric', day: 'numeric'}).format(new Date(post.date))}</h2>
          <h2>{new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date(post.date))}</h2>
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
    {/each}
    </ul>
    <br>
<hr>
  <h2>HTML :</h2>
  {#each posts as post}
  <section>
    <h2>{post.title}</h2>
    {@html post.html}
  </section>
  {/each}


<style>
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
  ul li{
    margin-bottom:15px;
  }
  ul li a{
    color:black;
  }
  img {
    margin:0 auto;
  }
</style>