document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about.intro-section');
  const topNav = document.querySelector('.top-nav');
  const portraitColumn = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');

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
      <p class="eyebrow"><span class="en">TEACHING</span><span class="zh">��学</span></p>
      <h2><span class="en">Courses</span><span class="zh">课程</span></h2>
      <p class="en">Courses I can teach in English or Russian.</p>
      <p class="zh">可使用英语或俄语授课的课程。</p>
      <ul class="course-list">
        <li><span class="en">History of China–Russia Relations</span><span class="zh">中俄关系史</span></li>
        <li><span class="en">Russia and the World</span><span class="zh">俄罗斯与世界</span></li>
        <li><span class="en">Introduction to International Higher Education Management</span><span class="zh">国际高等教育管理导论</span></li>
        <li><span class="en">Cross-cultural Communication</span><span class="zh">跨文化交际</span></li>
      </ul>`;
    aboutSection.after(section);
  }

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

      .language-switches {
        display: inline-flex;
        gap: 6px;
        align-items: center;
      }

      .language-switches .lang-switch {
        margin: 0;
      }

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
    document.head.append(layoutStyles);
  }

  const originalSwitch = document.querySelector('.lang-switch');
  if (originalSwitch && !document.querySelector('.lang-switch[data-language="en"]')) {
    const group = document.createElement('span');
    group.className = 'language-switches';
    originalSwitch.parentNode.insertBefore(group, originalSwitch);
    group.append(originalSwitch);
    originalSwitch.dataset.language = 'en';
    originalSwitch.textContent = 'EN';
    originalSwitch.setAttribute('aria-label', 'Switch to English');

    const zhButton = document.createElement('button');
    zhButton.type = 'button';
    zhButton.className = 'lang-switch';
    zhButton.dataset.language = 'zh';
    zhButton.textContent = '中文';
    zhButton.setAttribute('aria-label', '切换到中文');
    group.append(zhButton);
  }

  const buttons = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('cv-language') || 'en';
  } catch (_) {
    // keep default English when storage is unavailable
  }

  function setLanguage(language) {
    const nextLanguage = language === 'zh' ? 'zh' : 'en';
    document.body.classList.toggle('lang-zh', nextLanguage === 'zh');
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';

    buttons.forEach((button) => {
      const selected = button.dataset.language === nextLanguage;
      button.setAttribute('aria-pressed', String(selected));
      if (button.dataset.language === 'en') {
        button.textContent = 'EN';
        button.setAttribute('aria-label', 'Switch to English');
      } else if (button.dataset.language === 'zh') {
        button.textContent = '中文';
        button.setAttribute('aria-label', '切换到中文');
      }
    });

    try {
      localStorage.setItem('cv-language', nextLanguage);
    } catch (_) {
      // ignore if storage is unavailable
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language || 'en'));
  });

  setLanguage(['en', 'zh'].includes(savedLanguage) ? savedLanguage : 'en');
});
