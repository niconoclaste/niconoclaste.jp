<script>
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';
  import { page } from '$app/stores';
  const pagePath = $page.url.pathname;
  const pathParts = pagePath.split('/');
  const pathLength = pagePath.split('/').length - 1;
  let layout = '';
  let category = '';
  if(pagePath === '/'){
    layout = 'home';
    category = 'home';
  }else if(pathLength === 1){
    layout = 'inside';
  }else{
    layout = 'blog';
  }
</script>

<p>layout : {layout}</p>
<p>category : {category}</p>


{#if layout === 'home'}
<slot></slot>
{:else if layout === 'inside'}
<section class="contents">
  <Header current="about" />
  <section class="top-bloc">
    <div class="desc">
      <slot></slot>
    </div>
  </section>
  <Footer/>
</section>
{:else if layout === 'blog'}
<slot></slot>
{:else}
<slot></slot>
{/if}