document.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.portrait-column');
  const actions = document.querySelector('.top-actions');
  const portrait = document.querySelector('.portrait');
  const languageButtons = document.querySelectorAll('.lang-switch');

  // Keep the left profile column stationary while the right-hand CV scrolls.
  const layoutStyles = document.createElement('style');
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
      .portrait-column .download-button { padding: 11px 15px; font-size: 13px; }
      .portrait-column .lang-switch { padding: 10px 13px; font-size: 13px; }
    }
    @media (max-width: 700px) {
      html, body { height: auto; overflow: auto; }
      .site-header { position: sticky; top: 0; height: auto; }
      .page { position: static; width: auto; height: auto; overflow: visible; margin: 0 auto; }
      .intro-section { display: grid; }
      .portrait-column { position: static; width: auto; max-width: none; }
      .portrait-column .top-actions { display: flex; margin: 12px 0 0; }
      .top-nav > .top-actions { display: none; }
    }
  `;
  document.head.append(layoutStyles);

  // Place the CV button and language control beneath the fixed profile details.
  if (profile && actions && !profile.contains(actions)) profile.append(actions);

  // If the portrait asset has been uploaded at this path, use it; otherwise retain
  // the existing image rather than displaying a broken-image icon.
  if (portrait) {
    const photo = new Image();
    photo.onload = () => { portrait.src = 'assets/kuzina-portrait.jpg'; };
    photo.src = 'assets/kuzina-portrait.jpg';
  }

  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) { /* storage may be disabled */ }

  function setLanguage(language) {
    const isChinese = language === 'zh';
    document.body.classList.toggle('lang-zh', isChinese);
    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    languageButtons.forEach((button) => {
      button.textContent = isChinese ? 'EN' : '中文';
      button.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
    });
    try { localStorage.setItem('cv-language', language); } catch (_) { /* storage may be disabled */ }
  }

  languageButtons.forEach((button) => button.addEventListener('click', () => {
    setLanguage(document.body.classList.contains('lang-zh') ? 'en' : 'zh');
  }));
  setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
});
