<script>
  import language from '$lib/store.js';
  import { settings } from '$lib/settings.js';
  import Header from '$lib/components/Header.svelte';
  import translation from '$lib/translation.json';

  const category = "works";
	
  const pageTitle_en = [category.charAt(0).toUpperCase() + category.slice(1), settings.baseTitle];
  const pageTitle_ja = [translation[category].title.ja, settings.baseTitle];
	$: htmlTitle = language === 'en' ? pageTitle_en.join(' | ') : pageTitle_ja.join(' | ');
</script>

<svelte:head>
  <title>{htmlTitle}</title>
</svelte:head>

<main class="g-main">
  <Header current={category} />

  <article class="l-article" id={category}>
    <header class="m-header">
      <h1 class="title">{translation[category].title[$language]}</h1>
    </header>

    <section class="l-section">
      <div class="m-bloc">
      	<slot></slot>
      </div>
    </section>

    <footer class="m-footer">
			<p><a href="/#{category}"><strong>{#if $language == 'en'}Site top{:else}トップページ{/if}</strong></a></p>
    </footer>
  </article>
</main>