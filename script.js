document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

  // Add the courses navigation item and bilingual course list once.
  if (topNav && !topNav.querySelector('a[href="#courses"]')) {
    const link = document.createElement('a');
    link.href = '#courses';
    link.innerHTML = '<span class="en">Courses</span><span class="zh">课程</span>';
    topNav.querySelector('a[href="#about"]')?.after(link);
  }

  if (aboutSection && !document.querySelector('#courses')) {
    const section = document.createElement('section');
    section.id = 'courses';
    section.className = 'section courses-section';
    section.innerHTML = `
      <p class="eyebrow"><span class="en">TEACHING</span><span class="zh">教学</span></p>
      <h2><span class="en">Courses</span><span class="zh">课程</span></h2>
      <p class="en">Offered courses may be taught in English or Russian:</p>
      <p class="zh">以下课程可使用英语或俄语授课：</p>
      <ul class="course-list">
        <li><span class="en">Russian Society, Culture and Values</span><span class="zh">俄罗斯社会、文化与价值观</span></li>
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span></li>
        <li><span class="en">Cross-Cultural Communication</span><span class="zh">跨文化交际</span></li>
        <li><span class="en">Internationalization of Higher Education</span><span class="zh">高等教育国际化</span></li>
        <li><span class="en">Education Diplomacy and Soft Power in a Multipolar World</span><span class="zh">多极化世界中的教育外交与软实力</span></li>
        <li><span class="en">Project Management for Cultural and Educational Organizations</span><span class="zh">文化与教育机构项目管理</span></li>
        <li><span class="en">Commercialization and Monetization of University International Activity</span><span class="zh">高校国际活动的商业化与变现</span></li>
      </ul>`;
    aboutSection.after(section);
  }

  if (portraitColumn && actions && !portraitColumn.contains(actions)) portraitColumn.append(actions);

  if (!document.querySelector('style[data-profile-layout]')) {
    const style = document.createElement('style');
    style.dataset.profileLayout = 'true';
    style.textContent = `
      body .en { display: inline; }
      body .zh { display: none; }
      body.lang-zh .en { display: none; }
      body.lang-zh .zh { display: inline; }
      .language-switches { display: inline-flex; gap: 6px; align-items: center; }
      .language-switches .lang-switch { margin: 0; }
      .top-actions { display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 0 0 12px; }
      .top-actions .download-button { margin-top: 4px; }
      .courses-section { margin-top: 18px; padding-top: 16px; border-top: 1px solid rgba(17,34,51,.08); }
      .courses-section h2 { margin: 0 0 8px; }
      .courses-section > p:not(.eyebrow) { margin: 0 0 10px; }
      .courses-section .course-list {
        list-style: none; padding: 0; margin: 8px 0 0;
        display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 28px; row-gap: 0;
      }
      .courses-section .course-list li {
        display: block; min-width: 0; margin: 0; padding: 7px 0;
        border-bottom: 1px solid rgba(17,34,51,.08);
      }
      @media (max-width: 700px) {
        .courses-section .course-list { grid-template-columns: 1fr; }
        .courses-section .course-list li { padding: 8px 0; }
      }
      @media (min-width: 701px) {
        html, body { height: 100%; overflow: hidden; }
        .site-header { position: fixed; inset: 0 0 auto; height: 72px; z-index: 100; }
        .top-nav { height: 72px; min-height: 72px; }
        .top-nav > .top-actions { display: none; }
        .page { position: fixed; top: 72px; right: 0; bottom: 0; left: 31%; width: 69%; max-width: none; height: auto; margin: 0; padding: 48px clamp(28px,5vw,82px) 0; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; }
        .intro-section { display: block; padding: 30px 0 44px; }
        .portrait-column { position: fixed; top: 112px; left: 4.5%; width: 22%; max-width: 310px; padding: 0; z-index: 2; }
        .portrait { width: min(100%,270px); height: auto; aspect-ratio: 1; border-radius: 50%; border: 1px solid #e8eaec; object-fit: cover; object-position: center 27%; }
        .portrait-column .top-actions { margin: 22px 0 0; gap: 10px; }
        .portrait-column .download-button { margin: 0; padding: 11px 15px; font-size: 13px; }
        .portrait-column .lang-switch { margin: 0; padding: 10px 13px; font-size: 13px; }
      }
      @media (max-width: 700px) {
        html, body { height: auto; overflow: auto; }
        .site-header { position: sticky; top: 0; height: auto; }
        .page { position: static; width: auto; height: auto; overflow: visible; margin: 0 auto; }
        .intro-section { display: grid; }
        .portrait-column { position: static; width: auto; max-width: none; }
        .portrait-column .top-actions { margin: 12px 0 0; gap: 9px; }
        .top-nav > .top-actions { display: none; }
      }
    `;
    document.head.append(style);
  }

  // Keep exactly two language buttons: EN and 中文.
  const actionsButtons = actions ? [...actions.querySelectorAll('.lang-switch')] : [];
  let englishButton = document.querySelector('.lang-switch[data-language="en"]') || actionsButtons[0] || document.querySelector('.lang-switch');
  if (englishButton) {
    const group = englishButton.closest('.language-switches') || document.createElement('span');
    group.className = 'language-switches';
    if (!group.isConnected) englishButton.parentNode.insertBefore(group, englishButton);
    group.append(englishButton);
    englishButton.dataset.language = 'en';
    englishButton.textContent = 'EN';
    englishButton.setAttribute('aria-label', 'Switch to English');

    let chineseButton = group.querySelector('.lang-switch[data-language="zh"]');
    if (!chineseButton) {
      chineseButton = document.createElement('button');
      chineseButton.type = 'button';
      chineseButton.className = 'lang-switch';
      chineseButton.dataset.language = 'zh';
      group.append(chineseButton);
    }
    chineseButton.textContent = '中文';
    chineseButton.setAttribute('aria-label', '切换到中文');

    document.querySelectorAll('.lang-switch').forEach((button) => {
      if (button !== englishButton && button !== chineseButton) button.remove();
    });

    let savedLanguage = 'en';
    try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) { /* storage may be disabled */ }

    function setLanguage(language) {
      const current = language === 'zh' ? 'zh' : 'en';
      document.body.classList.toggle('lang-zh', current === 'zh');
      document.body.classList.remove('lang-ru');
      document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
      englishButton.setAttribute('aria-pressed', String(current === 'en'));
      chineseButton.setAttribute('aria-pressed', String(current === 'zh'));
      try { localStorage.setItem('cv-language', current); } catch (_) { /* storage may be disabled */ }
    }

    englishButton.addEventListener('click', () => setLanguage('en'));
    chineseButton.addEventListener('click', () => setLanguage('zh'));
    setLanguage(savedLanguage);
  }

  // Retire any legacy Russian translation spans and saved Russian preference.
  document.querySelectorAll('.ru').forEach((element) => element.remove());
  document.body.classList.remove('lang-ru');
  try { if (localStorage.getItem('cv-language') === 'ru') localStorage.setItem('cv-language', 'en'); } catch (_) { /* ignore */ }
});
