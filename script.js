document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

  if (topNav && !topNav.querySelector('a[href="#courses"]')) {
    const link = document.createElement('a');
    link.href = '#courses';
    link.innerHTML = '<span class="en">Courses</span><span class="zh">课程</span><span class="ru">Курсы</span>';
    topNav.querySelector('a[href="#about"]')?.after(link);
  }

  if (aboutSection && !document.querySelector('#courses')) {
    const section = document.createElement('section');
    section.id = 'courses';
    section.className = 'section courses-section';
    section.innerHTML = `
      <p class="eyebrow"><span class="en">TEACHING</span><span class="zh">教学</span><span class="ru">ПРЕПОДАВАНИЕ</span></p>
      <h2><span class="en">Courses</span><span class="zh">课程</span><span class="ru">Курсы</span></h2>
      <p class="en">Offered courses may be taught in English or Russian:</p><p class="zh">以下课程可使用英语或俄语授课：</p><p class="ru">Могу преподавать следующие дисциплины на английском или русском языке:</p>
      <ul class="course-list">
        <li><span class="en">Russian Society, Culture and Values</span><span class="zh">俄罗斯社会、文化与价值观</span><span class="ru">Российское общество, культура и ценности</span><small><span class="en">Cultural Studies</span><span class="zh">文化研究</span><span class="ru">Культурология</span></small></li>
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span><span class="ru">История российско-китайских отношений</span><small><span class="en">History / International Relations</span><span class="zh">历史 / 国际关系</span><span class="ru">История / международные отношения</span></small></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span><span class="ru">Россия и мир</span><small><span class="en">History / Policy &amp; Economy</span><span class="zh">历史 / 政策与经济</span><span class="ru">История / политика и экономика</span></small></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span><span class="ru">Введение в управление международным высшим образованием</span><small><span class="en">History / Management</span><span class="zh">历史 / 管理</span><span class="ru">История / менеджмент</span></small></li>
        <li><span class="en">Cross-Cultural Communication</span><span class="zh">跨文化交际</span><span class="ru">Межкультурная коммуникация</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
        <li><span class="en">Internationalization of Higher Education</span><span class="zh">高等教育国际化</span><span class="ru">Интернационализация высшего образования</span><small><span class="en">Education / History</span><span class="zh">���育 / 历史</span><span class="ru">Образование / история</span></small></li>
        <li><span class="en">Education Diplomacy and Soft Power in a Multipolar World</span><span class="zh">多极化世界中的教育外交与软实力</span><span class="ru">Образовательная дипломатия и мягкая сила в многополярном мире</span><small><span class="en">International Relations</span><span class="zh">国际关系</span><span class="ru">Международные отношения</span></small></li>
        <li><span class="en">Project Management for Cultural and Educational Organizations</span><span class="zh">文化与教育机构项目管理</span><span class="ru">Управление проектами в культурных и образовательных организациях</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
        <li><span class="en">Commercialization and Monetization of University International Activity</span><span class="zh">高校国际活动的商业化与变现</span><span class="ru">Коммерциализация и монетизация международной деятельности университетов</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
      </ul>`;
    aboutSection.after(section);
  }

  const ru = [
    ['Homepage','Главная'],['About Me','Обо мне'],['Work Experience','Опыт работы'],['Education','Образование'],['Professional Development','Повышение квалификации'],['Publications','Публикации'],['Languages','Языки'],['Contact','Контакты'],['Download English CV','Скачать резюме на английском'],['Download CV','Скачать резюме'],['Email','Электронная почта'],['WeChat','WeChat'],['Xiaohongshu','Xiaohongshu'],['Location','Местоположение'],['International Education Management Expert','Эксперт в области управления международным образованием'],['International education, built through collaboration.','Международное образование, основанное на сотрудничестве.'],['ABOUT ME','ОБО МНЕ'],['TEACHING','ПРЕПОДАВАНИЕ'],['CAREER','КАРЬЕРА'],['ACADEMIC BACKGROUND','ОБРАЗОВАНИЕ'],['LIFELONG LEARNING','НЕПРЕРЫВНОЕ ОБУЧЕНИЕ'],['Professional Development Courses','Курсы повышения квалификации'],['RESEARCH','ИССЛЕДОВАНИЯ'],['LANGUAGES','ЯЗЫКИ'],['GET IN TOUCH','СВЯЖИТЕСЬ СО МНОЙ'],['Courses','Курсы'],['Russian','Русский'],['English','Английский'],['Chinese','Китайский'],['French','Французский'],['Native','Родной'],['A1 · Beginner','A1 · начальный'],['A2 · Elementary','A2 · элементарный'],['C1 · Advanced · TOEIC (2022)','C1 · Продвинутый · TOEIC (2022)'],['Russian Society, Culture and Values','Российское общество, культура и ценности'],['History of China–Russia Relations','История российско-китайских от��ошений'],['Russia and the World','Россия и мир'],['Introduction to International Higher Education Management','Введение в управление международным высшим образованием'],['Cross-Cultural Communication','Межкультурная коммуникация'],['Internationalization of Higher Education','Интернационализация высшего образования'],['Education Diplomacy and Soft Power in a Multipolar World','Образовательная дипломатия и мягкая сила в многополярном мире'],['Project Management for Cultural and Educational Organizations','Управление проектами в культурных и образовательных организациях'],['Commercialization and Monetization of University International Activity','Коммерциализация и монетизация международной деятельности университетов'],['For collaboration, lectures, and international education projects','По вопросам сотрудничества, лекций и проектов в сфере международного образования, пожалуйста, свяжитесь со мной.']
  ];

  const findTranslation = (text) => {
    const value = text.trim().replace(/\s+/g, ' ');
    const match = ru.find(([english]) => value === english || value.startsWith(english));
    return match?.[1];
  };

  document.querySelectorAll('.en').forEach((element) => {
    if (element.nextElementSibling && element.nextElementSibling.classList.contains('ru')) return;
    const translation = findTranslation(element.textContent);
    if (!translation) return;
    const span = document.createElement('span');
    span.className = 'ru';
    span.textContent = translation;
    element.after(span);
  });

  if (portraitColumn && actions && !portraitColumn.contains(actions)) portraitColumn.append(actions);

  const style = document.createElement('style');
  style.textContent = `
    body .en { display: inline; }
    body .zh { display: none; }
    body .ru { display: none; }
    body.lang-zh .en, body.lang-zh .ru { display: none; }
    body.lang-zh .zh { display: inline; }
    body.lang-ru .en, body.lang-ru .zh { display: none; }
    body.lang-ru .ru { display: inline; }

    .language-switches { display: inline-flex; gap: 6px; align-items: center; }
    .language-switches .lang-switch { margin: 0; }

    .top-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin: 0 0 12px;
    }

    .top-actions .download-button {
      margin-top: 4px;
    }

    .courses-section {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(17,34,51,0.08);
    }
    .courses-section h2 { margin: 0 0 8px; }
    .courses-section > p:not(.eyebrow) { margin: 0 0 10px; }
    .courses-section .course-list {
      list-style: none;
      padding: 0;
      margin: 8px 0 0;
      display: grid;
      grid-template-columns: 1fr;
    }
    .courses-section .course-list li {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin: 0;
      padding: 7px 0;
      border-bottom: 1px solid rgba(17,34,51,0.08);
    }
    .courses-section .course-list li > span { min-width: 0; }
    .courses-section .course-list small {
      flex: 0 0 auto;
      color: #78838d;
      font-size: 0.82em;
      line-height: 1.4;
      text-align: right;
    }

    @media (max-width: 700px) {
      .courses-section .course-list li { display: block; padding: 8px 0; }
      .courses-section .course-list small { display: block; margin-top: 1px; text-align: left; }
    }

    @media (min-width: 701px) {
      html, body { height: 100%; overflow: hidden; }
      .site-header { position: fixed; inset: 0 0 auto; height: 72px; z-index: 100; }
      .top-nav { height: 72px; min-height: 72px; }
      .top-nav > .top-actions { display: none; }
      .page {
        position: fixed; top: 72px; right: 0; bottom: 0; left: 31%;
        width: 69%; max-width: none; height: auto; margin: 0;
        padding: 48px clamp(28px, 5vw, 82px) 0;
        overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain;
      }
      .intro-section { display: block; padding: 30px 0 44px; }
      .portrait-column {
        position: fixed; top: 112px; left: 4.5%; width: 22%; max-width: 310px;
        padding: 0; z-index: 2;
      }
      .portrait { width: min(100%, 270px); height: auto; aspect-ratio: 1; border-radius: 50%; border: 1px solid #e8eaec; object-fit: cover; object-position: center 27%; }
      .portrait-column h1 { margin-top: 22px; }
      .portrait-column .top-actions { display: flex; margin: 22px 0 0; gap: 10px; }
      .portrait-column .download-button { margin: 0; padding: 11px 15px; font-size: 13px; }
      .portrait-column .lang-switch { margin: 0; padding: 10px 13px; font-size: 13px; }
    }
    @media (max-width: 700px) {
      html, body { height: auto; overflow: auto; }
      .site-header { position: sticky; top: 0; height: auto; }
      .page { position: static; width: auto; height: auto; overflow: visible; margin: 0 auto; }
      .intro-section { display: grid; }
      .portrait-column { position: static; width: auto; max-width: none; }
      .portrait-column .top-actions { display: flex; margin: 12px 0 0; gap: 9px; }
      .top-nav > .top-actions { display: none; }
    }
  `;
  document.head.append(style);

  const originalSwitch = document.querySelector('.lang-switch');
  if (originalSwitch && !document.querySelector('.lang-switch[data-language="ru"]')) {
    const group = document.createElement('span');
    group.className = 'language-switches';
    originalSwitch.parentNode.insertBefore(group, originalSwitch);
    group.append(originalSwitch);

    const zhButton = document.createElement('button');
    zhButton.type = 'button';
    zhButton.className = 'lang-switch';
    zhButton.dataset.language = 'zh';
    zhButton.textContent = '中文';
    zhButton.setAttribute('aria-label', '切换到中文');
    group.append(zhButton);

    const ruButton = document.createElement('button');
    ruButton.type = 'button';
    ruButton.className = 'lang-switch';
    ruButton.dataset.language = 'ru';
    ruButton.textContent = 'RU';
    ruButton.setAttribute('aria-label', 'Switch to Russian');
    group.append(ruButton);

    const enButton = document.createElement('button');
    enButton.type = 'button';
    enButton.className = 'lang-switch';
    enButton.dataset.language = 'en';
    enButton.textContent = 'EN';
    enButton.setAttribute('aria-label', 'Switch to English');
    group.append(enButton);
  }

  const buttons = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) {}

  function setLanguage(language) {
    document.body.classList.toggle('lang-zh', language === 'zh');
    document.body.classList.toggle('lang-ru', language === 'ru');
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'ru' ? 'ru' : 'en';

    buttons.forEach((button) => {
      const isSelected = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(isSelected));
      if (button.dataset.language === 'zh') {
        button.textContent = '中文';
      } else if (button.dataset.language === 'ru') {
        button.textContent = 'RU';
      } else {
        button.textContent = 'EN';
      }
    });

    try { localStorage.setItem('cv-language', language); } catch (_) {}
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.language || 'en';
      setLanguage(next);
    });
  });

  setLanguage(['en', 'zh', 'ru'].includes(savedLanguage) ? savedLanguage : 'en');
});
