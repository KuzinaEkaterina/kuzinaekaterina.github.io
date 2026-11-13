document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

  // Add Courses directly after About in the top navigation and page content.
  if (topNav && !topNav.querySelector('a[href="#courses"]')) {
    const coursesLink = document.createElement('a');
    coursesLink.href = '#courses';
    coursesLink.innerHTML = '<span class="en">Courses</span><span class="zh">课程</span><span class="ru">Курсы</span>';
    topNav.querySelector('a[href="#about"]')?.after(coursesLink);
  }

  if (aboutSection && !document.querySelector('#courses')) {
    const coursesSection = document.createElement('section');
    coursesSection.id = 'courses';
    coursesSection.className = 'section courses-section';
    coursesSection.innerHTML = `
      <p class="eyebrow"><span class="en">TEACHING</span><span class="zh">教学</span><span class="ru">ПРЕПОДАВАНИЕ</span></p>
      <h2><span class="en">Courses</span><span class="zh">课程</span><span class="ru">Курсы</span></h2>
      <p class="en">Offered courses may be taught in English or Russian:</p><p class="zh">以下课程可使用英语或俄语授课：</p><p class="ru">Могу преподавать следующие дисциплины на английском или русском языке:</p>
      <ul class="course-list">
        <li><span class="en">Russian Society, Culture and Values</span><span class="zh">俄罗斯社会、文化与价值观</span><span class="ru">Российское общество, культура и ценности</span><small><span class="en">Cultural Studies</span><span class="zh">文化研究</span><span class="ru">Культурология</span></small></li>
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span><span class="ru">История российско-китайских отношений</span><small><span class="en">History / International Relations</span><span class="zh">历史 / 国际关系</span><span class="ru">История / Международные отношения</span></small></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span><span class="ru">Россия и мир</span><small><span class="en">History / Policy &amp; Economy</span><span class="zh">历史 / 政策与经济</span><span class="ru">История / Политика и экономика</span></small></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span><span class="ru">Введение в управление международным высшим образованием</span><small><span class="en">History / Management</span><span class="zh">历史 / 管理</span><span class="ru">История / Менеджмент</span></small></li>
        <li><span class="en">Cross-Cultural Communication</span><span class="zh">跨文化交际</span><span class="ru">Межкультурная коммуникация</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
        <li><span class="en">Internationalization of Higher Education</span><span class="zh">高等教育国际化</span><span class="ru">Интернационализация высшего образования</span><small><span class="en">Education / History</span><span class="zh">教育 / 历史</span><span class="ru">Образование / История</span></small></li>
        <li><span class="en">Education Diplomacy and Soft Power in a Multipolar World</span><span class="zh">多极化世界中的教育外交与软实力</span><span class="ru">Образовательная дипломатия и мягкая сила в многополярном мире</span><small><span class="en">International Relations</span><span class="zh">国际关系</span><span class="ru">Международные отношения</span></small></li>
        <li><span class="en">Project Management for Cultural and Educational Organizations</span><span class="zh">文化与教育机构项目管理</span><span class="ru">Управление проектами в культурных и образовательных организациях</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
        <li><span class="en">Commercialization and Monetization of University International Activity</span><span class="zh">高校国际活动的商业化与变现</span><span class="ru">Коммерциализация и монетизация международной деятельности университетов</span><small><span class="en">Management</span><span class="zh">管理</span><span class="ru">Менеджмент</span></small></li>
      </ul>`;
    aboutSection.after(coursesSection);
  }

  // Translate the site's shared navigation, headings, and profile copy into Russian.
  const ruTranslations = new Map([
    ['Homepage', 'Главная'], ['About Me', 'Обо мне'], ['Work Experience', 'Опыт работы'], ['Education', 'Образование'], ['Professional Development', 'Повышение квалификации'], ['Publications', 'Публикации'], ['Languages', 'Языки'], ['Contact', 'Контакты'], ['Download English CV', 'Скачать резюме на английском'], ['Download CV', 'Скачать резюме'],
    ['International Education Management Expert', 'Эксперт в области управления международным образованием'], ['Wuhan, China', 'Ухань, Китай'], ['ABOUT ME', 'ОБО МНЕ'], ['International education, built through collaboration.', 'Международное образование, основанное на сотрудничестве.'],
    ['CAREER', 'КАРЬЕРА'], ['ACADEMIC BACKGROUND', 'ОБРАЗОВАНИЕ'], ['LIFELONG LEARNING', 'НЕПРЕРЫВНОЕ ОБУЧЕНИЕ'], ['Professional Development Courses', 'Курсы повышения квалификации'], ['RESEARCH', 'ИССЛЕДОВАНИЯ'], ['LANGUAGES', 'ЯЗЫКИ'], ['GET IN TOUCH', 'СВЯЖИТЕСЬ СО МНОЙ'], ['ABOUT ME', 'ОБО МНЕ'],
    ['Visiting Lecturer / Guest Speaker', 'Приглашённый преподаватель / спикер'], ['Head of Department', 'Начальник отдела'], ['Director, Center for International Student Preparation and Educational Program Adaptation', 'Директор Центра подготовки иностранных студентов и адаптации образовательных программ'], ['Head of External Relations, Institute of Social Sciences', 'Руководитель отдела внешних связей Института общественных наук'], ['Lecturer', 'Преподаватель'], ['Senior Specialist, International Policy Department', 'Ведущий специалист отдела международной политики'], ['Faculty Administrator, Sociocultural Project Management', 'Администратор факультета управления социокультурными проектами'],
    ['PhD Candidate, Educational Economy and Management', 'Аспирант программы «Экономика образования и управление»'], ['Master’s Degree, International Relations', 'Магистр международных отношений'], ['MA, Cultural Management', 'Магистр культурного менеджмента'], ['Specialist Degree, Cultural Studies', 'Специалист в области культурологии (пятилетнее образование в России)'],
    ['Russian Society, Culture and Values', 'Российское общество, культура и ценности'], ['History of China–Russia Relations', 'История российско-китайских отношений'], ['Russia and the World', 'Россия и мир'], ['Introduction to International Higher Education Management', 'Введение в управление международным высшим образованием'], ['Cross-Cultural Communication', 'Межкультурная коммуникация'], ['Internationalization of Higher Education', 'Интернационализация высшего образования'], ['Education Diplomacy and Soft Power in a Multipolar World', 'Образовательная дипломатия и мягкая сила в многополярном мире'], ['Project Management for Cultural and Educational Organizations', 'Управление проектами в культурных и образовательных организациях'], ['Commercialization and Monetization of University International Activity', 'Коммерциализация и монетизация международной деятельности университетов'],
    ['Russian', 'Русский'], ['English', 'Английский'], ['Chinese', 'Китайский'], ['French', 'Французский'], ['Native', 'Родной'], ['Beginner', 'Начальный'], ['Elementary', 'Элементарный'], ['Email', 'Электронная почта'], ['WeChat', 'WeChat'], ['Xiaohongshu', 'Xiaohongshu'], ['Location', 'Местоположение'], ['Email', 'Электронная почта'], ['Courses', 'Курсы']
  ]);
  document.querySelectorAll('.en').forEach((element) => {
    const english = element.textContent.trim();
    const russian = ruTranslations.get(english);
    if (russian && !element.parentElement?.querySelector(':scope > .ru')) {
      const translation = document.createElement('span');
      translation.className = 'ru';
      translation.textContent = russian;
      element.after(translation);
    }
  });

  // Keep the fixed profile panel, independently scrolling main content, and
  // existing CV/language controls in their original positions.
  if (portraitColumn && actions && !portraitColumn.contains(actions)) portraitColumn.append(actions);

  if (!document.querySelector('style[data-profile-layout]')) {
    const layoutStyles = document.createElement('style');
    layoutStyles.dataset.profileLayout = 'true';
    layoutStyles.textContent = `
      body .en, body .zh { display: inline; }
      body .zh, body .ru { display: none; }
      body.lang-zh .en, body.lang-zh .ru { display: none; }
      body.lang-zh .zh { display: inline; }
      body.lang-ru .en, body.lang-ru .zh { display: none; }
      body.lang-ru .ru { display: inline; }
      .courses-section { margin-top: 18px; padding-top: 16px; border-top: 1px solid rgba(17,34,51,.08); }
      .courses-section h2 { margin: 0 0 8px; }
      .courses-section > p:not(.eyebrow) { margin: 0 0 10px; }
      .courses-section .course-list { list-style:none; padding:0; margin:8px 0 0; display:grid; grid-template-columns:1fr; }
      .courses-section .course-list li { display:flex; align-items:baseline; justify-content:space-between; gap:12px; margin:0; padding:7px 0; border-bottom:1px solid rgba(17,34,51,.08); }
      .courses-section .course-list li > span { min-width:0; }
      .courses-section .course-list small { flex:0 0 auto; color:#78838d; font-size:.82em; line-height:1.4; text-align:right; }
      @media(max-width:700px){.courses-section .course-list li{display:block;padding:8px 0}.courses-section .course-list small{display:block;margin-top:1px;text-align:left}}
      @media(min-width:701px){
        html,body{height:100%;overflow:hidden}.site-header{position:fixed;inset:0 0 auto;height:72px;z-index:100}.top-nav{height:72px;min-height:72px}.top-nav>.top-actions{display:none}
        .page{position:fixed;top:72px;right:0;bottom:0;left:31%;width:69%;max-width:none;height:auto;margin:0;padding:48px clamp(28px,5vw,82px) 0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain}
        .intro-section{display:block;padding:30px 0 44px}.portrait-column{position:fixed;top:112px;left:4.5%;width:22%;max-width:310px;padding:0;z-index:2}
        .portrait{width:min(100%,270px);height:auto;aspect-ratio:1;border-radius:50%;border:1px solid #e8eaec;object-fit:cover;object-position:center 27%}.portrait-column h1{margin-top:22px}
        .portrait-column .top-actions{display:flex;margin:22px 0 0;gap:10px}.portrait-column .download-button{margin:0;padding:11px 15px;font-size:13px}.portrait-column .lang-switch{margin:0;padding:10px 13px;font-size:13px}
      }
      @media(max-width:700px){html,body{height:auto;overflow:auto}.site-header{position:sticky;top:0;height:auto}.page{position:static;width:auto;height:auto;overflow:visible;margin:0 auto}.intro-section{display:grid}.portrait-column{position:static;width:auto;max-width:none}.portrait-column .top-actions{display:flex;margin:12px 0 0;gap:9px}.top-nav>.top-actions{display:none}}
      .language-switches{display:inline-flex;gap:6px;align-items:center}.language-switches .lang-switch{padding:7px 10px;font-size:12px}
    `;
    document.head.append(layoutStyles);
  }

  const existingSwitch = document.querySelector('.lang-switch');
  if (existingSwitch && !document.querySelector('.lang-switch[data-language="ru"]')) {
    const switches = document.createElement('span');
    switches.className = 'language-switches';
    existingSwitch.parentNode.insertBefore(switches, existingSwitch);
    switches.append(existingSwitch);
    const russianButton = document.createElement('button');
    russianButton.className = 'lang-switch';
    russianButton.type = 'button';
    russianButton.dataset.language = 'ru';
    russianButton.textContent = 'RU';
    russianButton.setAttribute('aria-label', 'Переключить на русский');
    switches.append(russianButton);
  }

  const buttons = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) { /* storage may be disabled */ }

  function setLanguage(language) {
    document.body.classList.toggle('lang-zh', language === 'zh');
    document.body.classList.toggle('lang-ru', language === 'ru');
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    buttons.forEach((button) => {
      if (button.dataset.language === 'ru') {
        button.setAttribute('aria-pressed', String(language === 'ru'));
      } else {
        button.textContent = language === 'zh' ? 'EN' : '中文';
        button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
        button.setAttribute('aria-pressed', String(language === 'zh'));
      }
    });
    try { localStorage.setItem('cv-language', language); } catch (_) { /* storage may be disabled */ }
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.language === 'ru') {
      setLanguage(document.body.classList.contains('lang-ru') ? 'en' : 'ru');
    } else {
      setLanguage(document.body.classList.contains('lang-zh') ? 'en' : 'zh');
    }
  }));
  setLanguage(['en','zh','ru'].includes(savedLanguage) ? savedLanguage : 'en');
});
