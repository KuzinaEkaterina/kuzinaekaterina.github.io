document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

  // Add Courses directly after About in the top navigation and page content.
  if (topNav && !topNav.querySelector('a[href="#courses"]')) {
    const coursesLink = document.createElement('a');
    coursesLink.href = '#courses';
    coursesLink.innerHTML = '<span class="en">Courses</span><span class="zh">课程</span>';
    topNav.querySelector('a[href="#about"]')?.after(coursesLink);
  }

  if (aboutSection && !document.querySelector('#courses')) {
    const coursesSection = document.createElement('section');
    coursesSection.id = 'courses';
    coursesSection.className = 'section courses-section';
    coursesSection.innerHTML = `
      <p class="eyebrow"><span class="en">TEACHING</span><span class="zh">教学</span></p>
      <h2><span class="en">Courses</span><span class="zh">课程</span></h2>
      <p class="en">Courses I can teach in English or Russian.</p>
      <p class="zh">可使用英语或俄语授课的课程。</p>
      <ul class="course-list">
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span></li>
        <li><span class="en">Cross-cultural Communication</span><span class="zh">跨文化交际</span></li>
      </ul>`;
    aboutSection.after(coursesSection);
  }

  // Retain the fixed profile panel and independent right-side scrolling. Keep
  // the existing CV/language controls with the profile rather than removing them.
  if (portraitColumn && actions && !portraitColumn.contains(actions)) {
    portraitColumn.append(actions);
  }

  if (!document.querySelector('style[data-profile-layout]')) {
    const layoutStyles = document.createElement('style');
    layoutStyles.dataset.profileLayout = 'true';
    layoutStyles.textContent = `
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
    document.head.append(layoutStyles);
  }

  const buttons = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('cv-language') || 'en';
  } catch (_) {
    // Language switching still works when browser storage is unavailable.
  }

  function setLanguage(language) {
    const isChinese = language === 'zh';
    document.body.classList.toggle('lang-zh', isChinese);
    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    buttons.forEach((button) => {
      button.textContent = isChinese ? 'EN' : '中文';
      button.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
    });
    try {
      localStorage.setItem('cv-language', language);
    } catch (_) {
      // Do not block the language switch if browser storage is unavailable.
    }
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    setLanguage(document.body.classList.contains('lang-zh') ? 'en' : 'zh');
  }));

  setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
});
