document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

  // Add Courses directly after About in the navigation and page content.
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
      <p class="en">Offered courses may be taught in English or Russian:</p><p class="zh">以下课程可使用英语或俄语授课：</p><p class="ru">Могу преподавать следующие курсы на английском и русском языках:</p>
      <ul class="course-list">
        <li><span class="en">Russian Society, Culture and Values</span><span class="zh">俄罗斯社会、文化与价值观</span><span class="ru">Российское общество, культура и ценности</span></li>
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span><span class="ru">История российско-китайских отношений</span></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span><span class="ru">Россия и мир</span><small><span class="en">History / Policy &amp; Economics</span><span class="zh">历史 / 政策与经济</span><span class="ru">История / политика и экономика</span></small></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span><span class="ru">Введение в управление международным высшим образованием</span></li>
        <li><span class="en">Cross-Cultural Communication</span><span class="zh">跨文化交际</span><span class="ru">Межкультурная коммуникация</span><small><span class="en">Communication / Cultural Competence</span><span class="zh">沟通 / 文化能力</span><span class="ru">Коммуникация / культурная компетентность</span></small></li>
        <li><span class="en">Internationalization of Higher Education</span><span class="zh">高等教育国际化</span><span class="ru">Интернационализация высшего образования</span></li>
        <li><span class="en">Education Diplomacy and Soft Power in a Multipolar World</span><span class="zh">多极化世界中的教育外交与软实力</span><span class="ru">Образовательная дипломатия и мягкая сила в многополярном мире</span></li>
        <li><span class="en">Project Management for Cultural and Educational Organizations</span><span class="zh">文化与教育机构项目管理</span><span class="ru">Управление проектами в культурных и образовательных организациях</span></li>
        <li><span class="en">Commercialization and Monetization of University International Activity</span><span class="zh">高校国际活动的商业化与变现</span><span class="ru">Коммерциализация и монетизация международной деятельности университета</span></li>
      </ul>`;
    aboutSection.after(section);
  }

  // Russian translations for all English CV text. Prefix matching covers long
  // paragraphs whose content may include typographic punctuation variants.
  const ru = [
    ['Homepage','Главная'],['About Me','Обо мне'],['Work Experience','Опыт работы'],['Education','Образование'],['Professional Development','Повышение квалификации'],['Publications','Публикации'],['Languages','Языки'],['Contact','Контакты'],['Download English CV','Скачать английскую версию резюме'],['International Education Management Expert','Эксперт в области управления международным образованием'],['International education, built through collaboration.','Международное образование, построенное через сотрудничество.'],['I am an international education management practitioner','Я специалист в области управления международным образованием'],['I specialize in customized continuing education programs','Я специализируюсь на разработке индивидуальных программ дополнительного образования'],['I have taught in Russian and English','Я преподавала на русском и английском языках'],['Visiting Lecturer / Guest Speaker','Приглашённый преподаватель / спикер'],['Head of Department','Начальник отдела'],['Director, Center for International Cooperation','Директор Центра международного сотрудничества'],['Lectures in professional development programs','Читаю лекции для сотрудников университетов по управлению международными процессами'],['PhD Candidate, Educational Economy and Management','Аспирант программы «Экономика образования и управление»'],['Master’s Degree, International Relations','Магистратура по международным отношениям'],['Teaching “Culture of the Individual and Society” in Higher Education','Преподавание курса «Культура личности и общества» в высшей школе'],['Institutional Role of the Russian Language: Four Stages of Functional Transformation','Институциональная роль русского языка: четыре этапа функциональной трансформации'],['Russian','Русский'],['English','Английский'],['Chinese','Китайский'],['French','Французский'],['Native','Родной'],['Beginner','Начальный'],['Advanced','Продвинутый']
  ];
  const findTranslation = (text) => {
    const value = text.trim().replace(/\s+/g, ' ');
    const match = ru.find(([english]) => value === english || value.startsWith(english));
    return match?.[1];
  };

  // Add a translation beside every mapped English node; check the immediate
  // sibling so multiple translated fields within the same list item all work.
  document.querySelectorAll('.en').forEach((element) => {
    if (element.nextElementSibling?.classList.contains('ru')) return;
    const translation = findTranslation(element.textContent);
    if (!translation) return;
    const span = document.createElement('span');
    span.className = 'ru';
    span.textContent = translation;
    element.after(span);
  });

  // Russian organization names are paired with the English organization text.
  const organizationTranslations = [
    ['HSE University · Moscow, Russia','НИУ «Высшая школа экономики» · Москва, Россия'],
    ['Russian Presidential Academy of National Economy and Public Administration (RANEPA) · Moscow','Российская академия народного хозяйства и государственной службы при Президенте РФ · Москва'],
    ['RANEPA · Moscow, Russia','РАНХиГС · Москва, Россия'],
    ['Institute of Social Sciences, RANEPA · Moscow','Институт общественных наук РАНХиГС · Москва'],
    ['Institute UNIC (now Higher School “Sreda Obucheniya”) · Moscow','Институт UNIC (ныне Высшая школа «Среда обучения») · Москва'],
    ['Moscow School of Social and Economic Sciences · Moscow','Московская высшая школа социальных и экономических наук · Москва'],
    ['School of Education, Central China Normal University · Wuhan, China','Педагогический факультет Центрального китайского педагогического университета · Ухань, Китай'],
    ['Faculty of Political Science and Public Administration, Shandong University · China','Факультет политологии и государственного управления Шаньдунского университета · Китай'],
    ['University of Manchester · United Kingdom','Манчестерский университет · Великобритания'],['Institute UNIC · Russia','Институт UNIC · Россия']
  ];
  document.querySelectorAll('.organization').forEach((element) => {
    if (element.querySelector('.ru')) return;
    const source = element.textContent.trim().replace(/\s+/g, ' ');
    const match = organizationTranslations.find(([english]) => source.startsWith(english));
    if (!match) return;
    const english = document.createElement('span'); english.className = 'en'; english.textContent = source;
    const russian = document.createElement('span'); russian.className = 'ru'; russian.textContent = match[1];
    element.replaceChildren(english, russian);
  });

  // Keep the established fixed left profile / independently scrolling content layout.
  if (portraitColumn && actions && !portraitColumn.contains(actions)) portraitColumn.append(actions);
  if (!document.querySelector('style[data-profile-layout]')) {
    const style = document.createElement('style'); style.dataset.profileLayout = 'true';
    style.textContent = `
      body .en{display:inline}body .zh,body .ru{display:none}
      body.lang-zh .en,body.lang-zh .ru{display:none}body.lang-zh .zh{display:inline}
      body.lang-ru .en,body.lang-ru .zh{display:none}body.lang-ru .ru{display:inline}
      .courses-section{margin-top:18px;padding-top:16px;border-top:1px solid rgba(17,34,51,.08)}
      .courses-section h2{margin:0 0 8px}.courses-section>p:not(.eyebrow){margin:0 0 10px}
      .courses-section .course-list{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:28px;row-gap:0}
      .courses-section .course-list li{display:block;min-width:0;margin:0;padding:7px 0;border-bottom:1px solid rgba(17,34,51,.08)}
      .courses-section .course-list li>span{min-width:0}.courses-section .course-list small{flex:0 0 auto;color:#78838d;font-size:.82em;line-height:1.4;text-align:right}
      .language-switches{display:inline-flex;gap:6px;align-items:center}.language-switches .lang-switch{padding:7px 10px;font-size:12px}
      @media(max-width:700px){.courses-section .course-list{grid-template-columns:1fr}.courses-section .course-list li{display:block;padding:8px 0}.courses-section .course-list small{display:block;margin-top:1px;text-align:left}}
      @media(min-width:701px){html,body{height:100%;overflow:hidden}.site-header{position:fixed;inset:0 0 auto;height:72px;z-index:100}.top-nav{height:72px;min-height:72px}.top-nav>.top-actions{display:none}.page{position:fixed;top:72px;right:0;bottom:0;left:31%;width:69%;max-width:none;height:auto;margin:0;padding:48px clamp(28px,5vw,82px) 0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain}.intro-section{display:block;padding:30px 0 44px}.portrait-column{position:fixed;top:112px;left:4.5%;width:22%;max-width:310px;padding:0;z-index:2}.portrait{width:min(100%,270px);height:auto;aspect-ratio:1;border-radius:50%;border:1px solid #e8eaec;object-fit:cover;object-position:center 27%}.portrait-column .top-actions{margin:22px 0 0;gap:10px}.portrait-column .download-button{margin:0;padding:11px 15px;font-size:13px}.portrait-column .lang-switch{margin:0;padding:10px 13px;font-size:13px}}
      @media(max-width:700px){html,body{height:auto;overflow:auto}.site-header{position:sticky;top:0;height:auto}.page{position:static;width:auto;height:auto;overflow:visible;margin:0 auto}.intro-section{display:grid}.portrait-column{position:static;width:auto;max-width:none}.portrait-column .top-actions{margin:12px 0 0;gap:9px}.top-nav>.top-actions{display:none}}
    `;
    document.head.append(style);
  }

  // Add RU beside the existing Chinese/English switch, without replacing it.
  const originalSwitch = document.querySelector('.lang-switch:not([data-language])');
  if (originalSwitch && !document.querySelector('.lang-switch[data-language="ru"]')) {
    const group = document.createElement('span'); group.className = 'language-switches';
    originalSwitch.parentNode.insertBefore(group, originalSwitch); group.append(originalSwitch);
    const russianSwitch = document.createElement('button'); russianSwitch.type = 'button'; russianSwitch.className = 'lang-switch'; russianSwitch.dataset.language = 'ru'; russianSwitch.textContent = 'RU'; russianSwitch.setAttribute('aria-label', 'Switch to Russian');
    group.append(russianSwitch);
  }
  const switches = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en'; try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) {}
  function setLanguage(language) {
    document.body.classList.toggle('lang-zh', language === 'zh');
    document.body.classList.toggle('lang-ru', language === 'ru');
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    switches.forEach((button) => {
      if (button.dataset.language === 'ru') button.setAttribute('aria-pressed', String(language === 'ru'));
      else { button.textContent = language === 'zh' ? 'EN' : '中文'; button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文'); button.setAttribute('aria-pressed', String(language === 'zh'));
      }
    });
    try { localStorage.setItem('cv-language', language); } catch (_) {}
  }
  switches.forEach((button) => button.addEventListener('click', () => {
    const target = button.dataset.language === 'ru' ? 'ru' : (document.body.classList.contains('lang-zh') ? 'en' : 'zh');
    setLanguage(button.dataset.language === 'ru' && document.body.classList.contains('lang-ru') ? 'en' : target);
  }));
  setLanguage(['en','zh','ru'].includes(savedLanguage) ? savedLanguage : 'en');
});
