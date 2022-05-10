<script>
  export let id;
  export let title;
  export let title_ja;
  import language from '$lib/store.js';
  $: lang = $language;
</script>

<div class="m-bloc">
  <h3 class="m-title">
    {#if lang == 'en'}
    <span lang="en">{title}</span>
    {:else}
    <span lang="ja">{title_ja}</span>
    {/if}
  </h3>
  <div class="pen-block">
    <iframe height="380" style="width: 100%;" scrolling="no" title="CSS only hamburger navigation" src="https://codepen.io/niconoclaste/embed/{id}?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    {#if lang == 'en'}
    <span lang="en">
    See the Pen <a href="https://codepen.io/niconoclaste/pen/{id}">{title}</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
    </span>
    {:else}
    <span lang="ja">
    このコードペンを見る <a href="https://codepen.io/niconoclaste/pen/{id}">{title_ja}</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)
    </span>
    {/if}
    </iframe>
  </div>
</div>