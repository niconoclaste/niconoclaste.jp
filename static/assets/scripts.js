document.querySelectorAll('.js-switch-lang').forEach((btn) => {
  btn.addEventListener('click', () => {
    let selectedLang = btn.getAttribute('lang');
    document.documentElement.setAttribute('lang', selectedLang);
    localStorage.setItem('lang', selectedLang);
  });
});

