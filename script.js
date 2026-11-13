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
      <p class="en">Offered courses may be taught in English or Russian:</p>
      <p class="zh">以下课程可使用英语或俄语授课：</p>
      <ul class="course-list">
        <li><span class="en">Russian Society, Culture and Values</span><span class="zh">俄罗斯社会、文化与价值观</span><small><span class="en">Cultural Studies</span><span class="zh">文化研究</span></small></li>
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span><small><span class="en">History / International Relations</span><span class="zh">历史 / 国际关系</span></small></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span><small><span class="en">History / Policy &amp; Economy</span><span class="zh">历史 / 政策与经济</span></small></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span><small><span class="en">History / Management</span><span class="zh">历史 / 管理</span></small></li>
        <li><span class="en">Cross-Cultural Communication</span><span class="zh">跨文化交际</span><small><span class="en">Management</span><span class="zh">管理</span></small></li>
        <li><span class="en">Internationalization of Higher Education</span><span class="zh">高等教育国际化</span><small><span class="en">Education / History</span><span class="zh">教育 / 历史</span></small></li>
        <li><span class="en">Education Diplomacy and Soft Power in a Multipolar World</span><span class="zh">多极化世界中的教育外交与软实力</span><small><span class="en">International Relations</span><span class="zh">国际关系</span></small></li>
        <li><span class="en">Project Management for Cultural and Educational Organizations</span><span class="zh">文化与教育机构项目管理</span><small><span class="en">Management</span><span class="zh">管理</span></small></li>
        <li><span class="en">Commercialization and Monetization of University International Activity</span><span class="zh">高校国际活动的商业化与变现</span><small><span class="en">Management</span><span class="zh">管理</span></small></li>
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
      body .en { display: inline; }
      body .zh { display: none; }
      body.lang-zh .en { display: none; }
      body.lang-zh .zh { display: inline; }

      .courses-section {
        margin-top: 18px;
        padding-top: 16px;
        border-top: 1px solid rgba(17, 34, 51, 0.08);
      }

      .courses-section h2 {
        margin: 0 0 8px;
      }

      .courses-section > p:not(.eyebrow) {
        margin: 0 0 10px;
      }

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
        border-bottom: 1px solid rgba(17, 34, 51, 0.08);
      }

      .courses-section .course-list li > span {
        min-width: 0;
      }

      .courses-section .course-list small {
        flex: 0 0 auto;
        color: #78838d;
        font-size: 0.82em;
        line-height: 1.4;
        text-align: right;
      }

      @media (max-width: 700px) {
        .courses-section .course-list li {
          display: block;
          padding: 8px 0;
        }
        .courses-section .course-list small {
          display: block;
          margin-top: 1px;
          text-align: left;
        }
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
