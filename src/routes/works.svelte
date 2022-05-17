<script>
  import language from '$lib/store.js';
  import translation from '$lib/translation.json';
  import works from '$lib/works.json';
  works.filter((post) => !post.hidden);
  works.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0);
</script>

  <section class="l-section">
    <div class="m-bloc">
      <ul class="m-posts-list">
        {#each works as work}
        <li lang="{$language}" data-hidden="{work.hidden}" data-status="{work.status}" data-modified="{work.modified}" data-category="{work.category}">
          <a href="{work.link}" target="_blank" rel="noopener">
            {#if work.thumb}
            <div class="m-posts-list_thumb">
              <img src="{work.thumb}" alt="{work.title[$language]}" class="img">
            </div>
            {/if}
            <div class="m-posts-list_body">
              <h2 class="title">{work.title[$language]}</h2>
              <p class="m-posts-list_desc">{work.client[$language]}</p>
              <p class="m-posts-list_date">
                {#if $language === 'en'}
                {new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit'}).format(new Date(work.date))}
                {:else}
                {new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(work.date))}{new Intl.DateTimeFormat('ja-JP', {month: 'numeric'}).format(new Date(work.date))}
                {/if}
              </p>
            </div>
            {#if work.tags}
            <div class="m-posts-list_tags">
              {#each work.tags as tag}
              <span class="m-logo-icon" style="background-image:var(--logo_{tag})" title="{tag}">{tag}</span>
              {/each}
            </div>
            {/if}
          </a>
        </li>
        {/each}
      </ul>
    </div>
  </section>