(() => {
  'use strict';

  // 1. 页面文字：标题和搜索简介应与三个 HTML 中的内容同步。
  const buttons = [...document.querySelectorAll('[data-language]')];
  const translated = [...document.querySelectorAll('body [lang]')];
  const pages = {
    home: {
      titles: {
        en: 'Dongsheng Jia | Academic Homepage',
        'zh-CN': '贾东升 | 学术主页'
      },
      descriptions: {
        en: 'Dongsheng Jia is a PhD student in Finance at Shanghai University of Finance and Economics.',
        'zh-CN': '贾东升，上海财经大学金融学院博士生。'
      }
    },
    research: {
      titles: {
        en: 'Dongsheng Jia | Research',
        'zh-CN': '贾东升 | 研究'
      },
      descriptions: {
        en: 'Research on interfirm financial linkages, firm behavior, and macroeconomic outcomes by Dongsheng Jia.',
        'zh-CN': '贾东升的研究：企业间金融链条、企业行为与宏观经济后果。'
      }
    },
    idea: {
      titles: {
        en: 'Dongsheng Jia | Idea?',
        'zh-CN': '贾东升 | Idea?'
      },
      descriptions: {
        en: 'A few ideas and economic facts by Dongsheng Jia, open to question. Discussion and collaboration are welcome.',
        'zh-CN': '贾东升的一些初步想法与经济现象。欢迎交流与合作。'
      }
    }
  };
  const page = pages[document.body.dataset.page] || pages.home;
  const { titles, descriptions } = page;
  const key = 'dongsheng-jia-site-language';

  // 2. 切换语言：正文、按钮状态、浏览器标题和图片说明一起更新。
  function setLanguage(language) {
    if (!Object.hasOwn(titles, language)) return;

    document.documentElement.lang = language;
    translated.forEach(element => {
      element.hidden = element.lang !== language;
    });
    buttons.forEach(button => {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.language === language)
      );
    });

    document.title = titles[language];
    document.querySelector('meta[name="description"]').content = descriptions[language];
    document.querySelector('meta[property="og:title"]').content = titles[language];
    document.querySelector('meta[property="og:description"]').content = descriptions[language];

    const portrait = document.querySelector('.portrait img');
    if (portrait) {
      portrait.alt = language === 'en'
        ? 'Pencil portrait of Dongsheng Jia'
        : '贾东升的铅笔素描头像';
    }
    document.querySelector('.language-switch').setAttribute(
      'aria-label',
      language === 'en' ? 'Language' : '语言'
    );
    document.querySelector('.site-nav')?.setAttribute(
      'aria-label',
      language === 'en' ? 'Main navigation' : '页面导航'
    );

    try {
      localStorage.setItem(key, language);
    } catch {
      // 浏览器禁用本地存储时，页面仍可正常切换语言。
    }
  }

  // 3. 初始语言：链接参数优先，其次是浏览器记忆，默认英文。
  buttons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  let saved;
  try {
    saved = localStorage.getItem(key);
  } catch {
    // 没有已保存的语言时使用默认值。
  }

  const requested = new URLSearchParams(location.search).get('lang');
  const language = requested === 'zh' ? 'zh-CN' : requested;
  const initialLanguage = Object.hasOwn(titles, language || '')
    ? language
    : Object.hasOwn(titles, saved || '')
      ? saved
      : 'en';
  setLanguage(initialLanguage);
})();


