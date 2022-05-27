<script>
  import language from '$lib/store.js';
  import translation from '$lib/translation.json';
  import works from '$lib/works.json';
  import { settings } from '$lib/settings.js';

  let maxPosts = settings.maxPosts;


  $: dateOutput = (date) => $language === 'en' ? new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit'}).format(new Date(date)) : new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(date))+''+new Intl.DateTimeFormat('ja-JP', {month: 'numeric'}).format(new Date(date));


  let filtereWorks = works;
  let order = 'DESC';
  let showHidden = false;
  let tagsAND = true;

  

  let categories = [];
  let allCats = [...new Set(works.map(work => work.category))];
  allCats.forEach(cat => categories.push({name:cat, show:true}));

  let tags = [];
  let allTags = [...new Set(works.map(work => work.tags).flat())];
  allTags.forEach(tag => tags.push({name:tag, filter:false}));

  $: selectedTags = tags.filter((tag) => tag.filter);

  $: worksByVisibility = works.filter((work) => work.hidden || work.modified ? showHidden ? true : false : true);
  $: worksByCat = worksByVisibility.filter((work) => categories.some(cat => cat.name === work.category && cat.show === true) ? true : false);

  $: worksByTag = !tagsAND  ? selectedTags.length > 0 ? worksByCat.filter((work) => tags.some(tag => work.tags.includes(tag.name) && tag.filter === true) ? true : false) : worksByCat : selectedTags.length > 0 ? worksByCat.filter((work) => tags.every(tag => tag.filter === true ? work.tags.includes(tag.name) ? true : false : true)) : worksByCat;

  $: filtereWorks = worksByTag.sort((a,b) => order === 'DESC' ? new Date(b.date).getTime() - new Date(a.date) : new Date(a.date).getTime() - new Date(b.date));

  let worksLength = works.length;
  $: worksShown = filtereWorks.length;

  $: maxPages = Math.ceil(worksShown / maxPosts);

  let page = 1;
  // $: page = page > maxPages ? maxPages : 1;

  $: selectedPage = page > maxPages ? maxPages : page;

  $: pagination = Array.from({length: maxPages}, (x, i) => i+1);

</script>

  <section class="l-section">
    <div class="m-bloc">
      <div style="text-align:left;padding-bottom:20px">
        ORDER BY DATE :<br>
        <label><input type="radio" bind:group={order} value="DESC"> new → old </label> <br>
        <label><input type="radio" bind:group={order} value="ASC"> old → new </label>
      </div>
      <div style="text-align:left;padding-bottom:20px">
        SHOW HIDDEN WORKS ? : 
        <label><input type="radio" bind:group={showHidden} value={true}> yes </label> 
        <label><input type="radio" bind:group={showHidden} value={false}> no </label>
      </div>
      <div style="text-align:left;padding-bottom:20px">
        FILTER BY CATEGORIES : 
        {#each categories as cat, i}
          <label><input type="checkbox" checked={cat.show} value={cat.name} on:change={() => categories[i].show = !cat.show}> {cat.name} </label>
        {/each}
      </div>
      <div style="text-align:left;padding-bottom:20px">
        FILTER BY TAGS : <br>
        
        <label><input type="radio" bind:group={tagsAND} value={true}> Select works containing all selected tags (and)</label> <br>
        <label><input type="radio" bind:group={tagsAND} value={false}> Select works containing at least 1 of the selected tags (or)</label>
        <br>
        <!-- <label><input type="checkbox" bind:checked={tagsAND}> Select works containing every checked tags ?</label><br> -->
        {#each tags as tag, i}
          <label><input type="checkbox" checked={tag.filter} value={tag.name} on:change={() => tags[i].filter = !tag.filter}> {tag.name} </label>
        {/each}
      </div>
      <div style="text-align:left;padding-bottom:20px">
        showing : {worksShown} / {worksLength}
      </div>

      <div style="text-align:left;padding-bottom:20px">
        posts per page: {maxPosts}<br>
        <input type="range" bind:value={maxPosts} min="1" max="{worksShown}" on:input={() => page = 1}>
      </div>

      <ul class="m-works-list">
        {#each filtereWorks.slice(((selectedPage * maxPosts) - maxPosts), selectedPage * maxPosts) as work}
        <li lang="{$language}" data-hidden="{work.hidden}" data-status="{work.status}" data-date="{work.date}" data-modified="{work.modified}" data-category="{work.category}">
          <a href="{work.link}" target="_blank" rel="noopener">
            {#if work.thumb}
            <div class="m-works-list_thumb">
              <img src="{work.thumb}" alt="{work.title[$language]}" class="img">
            </div>
            {/if}
            <div class="m-works-list_body">
              <h2 class="title">{work.title[$language]}</h2>
              <!-- <p class="m-works-list_desc">{work.excerpt[$language]}</p> -->
              <p class="m-works-list_desc">{work.client[$language]}</p>
              <p class="m-works-list_date">{dateOutput(work.date)}</p>
            </div>
            {#if work.tags}
            <div class="m-works-list_tags">
              {#each work.tags as tag}
              <span class="m-logo-icon" style="background-image:var(--logo_{tag})" title="{tag}">{tag}</span>
              {/each}
            </div>
            {/if}
          </a>
        </li>
        {/each}
      </ul>

      <div style="text-align:center;padding-top:20px">
        <!-- <p>page: {selectedPage} / {maxPages}</p>
        <div style="text-align:center;position:relative; padding-bottom:50px;">
        <input type="range" bind:value={page} min="1" max="{maxPages}" data-value="{page}">
        </div> -->
        <ul class="m-pagination">
        {#each pagination as pag}
          <li><button class="{selectedPage === pag ? 'is-active' : ''}" on:click={() => selectedPage = pag}>{pag}</button></li>
        {/each}
        </ul>
      </div>
    </div>
  </section>




<style global>
.m-pagination{
  list-style:none;
  display:flex;
  gap:10px;
  justify-content:center;
}
.m-pagination button{
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.8rem;
  line-height:1;
  background:white;
  color:black;
  width:24px;
  height:24px;
  overflow:hidden;
  border-radius:24px;
  padding-bottom: 4px;
}
.m-pagination button.is-active{
  pointer-events:none;
  background:black;
  color:white;
}

</style>