<script>
  export let id;
  export let title;
  export let title_ja;
  import language from '$lib/store.js';
</script>

<div class="m-bloc">
  <h3 class="title">{$language === 'en' ? title : title_ja}</h3>
  <div class="m-codepen">
    <iframe scrolling="no" title="{$language === 'en' ? title : title_ja}" src="https://codepen.io/niconoclaste/embed/{id}?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    <span>{$language === 'en' ? 'See this Pen' : 'このコードペンを見る'} <a href="https://codepen.io/niconoclaste/pen/{id}">{$language === 'en' ? title : title_ja}</a> by ニコ (<a href="https://codepen.io/niconoclaste">@niconoclaste</a>)</span>
    </iframe>
  </div>
</div>