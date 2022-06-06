<script>
  import language from '$lib/store.js';
  import translation from '$lib/translation.json';
  import { settings } from '$lib/settings.js';
  import { getContext } from 'svelte';

  let works = getContext('works');

  // max works to show by page
  let maxWorks = settings.maxWorks;
  // let maxWorks = 8;

  $: dateOutput = (date) => $language === 'en' ? new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(new Date(date)) : new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(date));

  $: categoryOutput = (category) => category === '' ? category : translation.works.categories[category][$language];
  
  // unfiltered works
  let sortedWorks = works;

  // unfiltered works length
  let worksLength = works.length;

  // date sorting []
  let order = 'DESC';
  let showHidden = false;

  // date sorting []
  let techsAND = true;


  // get a list of all categories
  let categories = [];
  let allCats = [...new Set(works.map(work => work.category))];
  allCats.forEach(cat => cat !== '' ? categories.push({name:cat, show:true, works:[]}) : '');

  // store all works in an array of categories
  let worksByCategory = [];
  allCats.forEach(cat => worksByCategory[cat] = []);
  works.forEach(work => worksByCategory[work.category].push(work));


  // get a list of all technologies
  let techs = [];
  let allTechs = [...new Set(works.map(work => work.techs).flat())];
  allTechs.forEach(tech => techs.push({name:tech, filter:false}));

  // currently selected technologies
  $: selectedTechs = techs.filter((tech) => tech.filter);
  
  // works filtered by visibility
  $: worksByVisibility = works.filter((work) => work.hidden || work.modified ? showHidden ? true : false : true);

  // works filtered by category
  $: worksByCat = worksByVisibility.filter((work) => categories.some(cat => cat.name === work.category && cat.show === true) ? true : false);

  // works filtered by technology
  $: worksByTechs = !techsAND ? selectedTechs.length > 0 ? worksByCat.filter((work) => techs.some(tech => work.techs.includes(tech.name) && tech.filter === true) ? true : false) : worksByCat : selectedTechs.length > 0 ? worksByCat.filter((work) => techs.every(tech => tech.filter === true ? work.techs.includes(tech.name) ? true : false : true)) : worksByCat;

  // works sorted by date
  $: sortedWorks = worksByTechs.sort((a,b) => order === 'DESC' ? new Date(b.date).getTime() - new Date(a.date) : new Date(a.date).getTime() - new Date(b.date));


  // filtered works length
  $: worksShown = sortedWorks.length;

  // pagination / navigation
  $: maxPages = Math.ceil(worksShown / maxWorks);
  let page = 1;
  $: selectedPage = page > maxPages ? maxPages : page;
  $: pagination = Array.from({length: maxPages}, (x, i) => i+1);

  let workPage = 0;

  let workCurrPage = function(i){
    if(i % maxWorks === 0){
      workPage ++;
    }

    return workPage;
  }
</script>

  <section class="l-section">
    <div class="m-bloc">
    <!-- 
      <p class="m-filter-bloc">
        <strong>ORDER BY DATE : </strong><br>
        <label><input type="radio" bind:group={order} value="DESC"> new → old </label> <br>
        <label><input type="radio" bind:group={order} value="ASC"> old → new </label>
      </p>
      <p class="m-filter-bloc">
        <strong>SHOW HIDDEN WORKS ? : </strong>
        <label><input type="radio" bind:group={showHidden} value={false}> no </label>
        <label><input type="radio" bind:group={showHidden} value={true}> yes </label> 
      </p>
      <p class="m-filter-bloc">
        <strong>FILTER BY CATEGORIES : </strong>
        {#each categories as cat, i}
          <label><input type="checkbox" checked={cat.show} value={cat.name} on:change={() => categories[i].show = !cat.show}> {categoryOutput(cat.name)} </label>
        {/each}
      </p>
      <p class="m-filter-bloc">
        <strong>FILTER BY TECHNOLOGY : </strong><br>
        
        <label><input type="radio" bind:group={techsAND} value={true}> Select works containing all selected technologies (and)</label> <br>
        <label><input type="radio" bind:group={techsAND} value={false}> Select works containing at least 1 of the selected technology (or)</label>
        <br>
        {#each techs as tech, i}
          <label><input type="checkbox" checked={tech.filter} value={tech.name} on:change={() => techs[i].filter = !tech.filter}> {tech.name} </label>
        {/each}
      </p>
      <p class="m-filter-bloc">
        <strong>showing : </strong>{worksShown} ({worksLength})
      </p>

      <p class="m-filter-bloc">
        <strong>posts per page: </strong>{maxWorks}<br>
        <input type="range" bind:value={maxWorks} min="1" max="{worksShown}" on:input={() => page = 1}>
      </p>
    -->

      <ul class="m-works-list" id="list">
        <!-- {#each sortedWorks.slice(((selectedPage * maxWorks) - maxWorks), selectedPage * maxWorks) as work, i} -->
      {#each sortedWorks as work, i}
        <li class:is-hidden={work.hidden || work.modified} data-page="{Math.floor((i / maxWorks) + 1)}" hidden={Math.floor((i / maxWorks) + 1) > selectedPage ? true : false}>
          <a href="{!work.hidden ? work.link : '#list'}" target="_blank" rel="noopener">
          {#if work.thumb}
            <div class="m-works-list_thumb">
              <img src="{work.thumb}" alt="{work.title[$language]}" class="img" loading="lazy">
            </div>
          {/if}
            <div class="m-works-list_body">
              <h2 class="title">{work.title[$language]}</h2>
              <p class="m-works-list_desc">{work.client[$language]}</p>
              <p class="m-works-list_date">{dateOutput(work.date)} / {categoryOutput(work.category)}</p>
            </div>
          {#if work.techs}
            <div class="m-works-list_tags">
            {#each work.techs as tech}
              <span class="m-logo-icon" style="background-image:var(--logo_{tech})" title="{tech}">{tech}</span>
            {/each}
            </div>
          {/if}
          </a>
        </li>
      {/each}
      </ul>
    </div>
  {#if pagination.length > 1 && selectedPage < pagination.length}
    <div class="m-filter-bloc">
      <button on:click={() => selectedPage = selectedPage + 1}>LOAD MORE</button>
      <!-- <p>page: {selectedPage} / {maxPages}</p>
      <div style="text-align:center;position:relative; padding-bottom:50px;">
      <input type="range" bind:value={page} min="1" max="{maxPages}" data-value="{page}">
      </div> -->
      <!-- <ul class="m-pagination">
      {#each pagination as pag}
        <li><a href="#list" class="{selectedPage === pag ? 'is-active' : ''}" on:click={() => selectedPage = pag}>{pag}</a></li>
      {/each}
      </ul> -->
    </div>
  {/if}
  </section>