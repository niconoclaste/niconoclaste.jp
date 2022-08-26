import { writable } from 'svelte/store';
import { settings } from '$lib/settings.js';
import { browser } from '$app/env';

const baseTitle = settings.baseTitle;
function createTitle() {
  const {subscribe, set} = writable('');
  return {
    subscribe,
    set: (value) => {
      set(`${value} | ${baseTitle}`)
    },
    clear: () => {
      set(baseTitle);
    }
  }
}
export const title = createTitle();


let lang = 'en';
if(browser){
  lang = window.localStorage.getItem('lang');
  if(lang === null){
    lang = window.navigator.userLanguage || window.navigator.language;
    if(lang !== 'ja'){
      lang = 'en';
    }
  }
  document.documentElement.setAttribute('lang', lang);
}
export const language = writable(lang);

language.subscribe((value) => {
  if(browser){
    window.localStorage.setItem('lang', value);
    document.documentElement.setAttribute('lang', value);
  }
});
export { language as default };