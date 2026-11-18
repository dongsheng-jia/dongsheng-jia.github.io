(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('[data-language]')];
  const translated = [...document.querySelectorAll('body [lang]')];
  const titles = { en: 'Dongsheng Jia | Academic Homepage', 'zh-CN': '贾东升 | 学术主页' };
  const descriptions = {
    en: 'Dongsheng Jia is a PhD student in Finance at Shanghai University of Finance and Economics.',
    'zh-CN': '贾东升，上海财经大学金融学院博士生。'
  };
  const key = 'dongsheng-jia-site-language';
  function setLanguage(language) {
    if (!Object.hasOwn(titles, language)) return;
    document.documentElement.lang = language;
    translated.forEach(element => { element.hidden = element.lang !== language; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.title = titles[language];
    document.querySelector('meta[name="description"]').content = descriptions[language];
    document.querySelector('meta[property="og:title"]').content = titles[language];
    document.querySelector('meta[property="og:description"]').content = descriptions[language];
    document.querySelector('.portrait img').alt = language === 'en' ? 'Crayon portrait of Dongsheng Jia' : '贾东升的蜡笔风格头像';
    document.querySelector('.language-switch').setAttribute('aria-label', language === 'en' ? 'Language' : '语言');
    try { localStorage.setItem(key, language); } catch { /* Optional preference storage. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let saved;
  try { saved = localStorage.getItem(key); } catch { /* Default to English. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  const language = requested === 'zh' ? 'zh-CN' : requested;
  setLanguage(Object.hasOwn(titles, language || '') ? language : Object.hasOwn(titles, saved || '') ? saved : 'en');
})();
