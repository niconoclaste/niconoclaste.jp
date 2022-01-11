<script>
  export let posts;
</script>

<ul>
{#each posts as post}
  <li>
    <a href="/writings/{post.slug}">
      <h2>{post.title}</h2>
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

<style>
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    list-style:none;
  }
  li{
    background:cadetblue;
    border-radius:4px;
    color:#fff;
    padding:15px;
  }
  li h2{
    line-height:1.3;
    font-size:3rem;
  }
  li a{
    color:#fff;
  }
  .tags{
    display:flex;
    gap: 5px;
    align-items:center;
  
  }
  .tags::before{
    content:"tags : ";
    display:flex;
    align-items:center;
    line-height:1;
  }
  
  .tags span{
    display:flex;
    justify-content:center;
    align-items:center;
    border:solid 1px #fff;
    padding:2px 8px;
    border-radius:4px;
    font-size:1.4rem;
    line-height:1;
  }
</style>