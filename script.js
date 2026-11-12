document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const mobileHeader = document.querySelector('.mobile-header');
  const download = document.querySelector('.sidebar > .download');
  const desktopLanguage = document.querySelector('.desktop-switch');
  const mobileLanguage = mobileHeader?.querySelector('.lang-switch');
  const mobileMonogram = mobileHeader?.querySelector('.monogram');
  const bottomDownload = document.querySelector('.bottom-download');

  // Put the primary actions above the portrait/profile area on desktop.
  if (sidebar && download && desktopLanguage) {
    const actionBar = document.createElement('div');
    actionBar.className = 'top-actions';
    actionBar.setAttribute('aria-label', 'CV and language options');
    sidebar.prepend(actionBar);
    actionBar.append(download, desktopLanguage);
    sidebar.querySelector('.desktop-mark')?.remove();
  }

  // On mobile, show the CV button beside the language switcher in the top bar.
  if (mobileHeader && download && mobileLanguage) {
    const mobileDownload = download.cloneNode(true);
    mobileDownload.classList.add('mobile-download');
    mobileHeader.insertBefore(mobileDownload, mobileLanguage);
    mobileMonogram?.remove();
  }

  // There is one primary CV action at the top; hide the duplicate footer action.
  bottomDownload?.remove();

  const styles = document.createElement('style');
  styles.textContent = `
    .top-actions{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 24px}
    .sidebar .top-actions .download{display:inline-flex;margin:0;padding:9px 13px;white-space:nowrap}
    .sidebar .top-actions .desktop-switch{display:inline-flex;margin:0;white-space:nowrap}
    .mobile-download{display:none}
    @media(max-width:650px){
      .mobile-header{justify-content:flex-end;gap:9px}
      .mobile-header .mobile-download{display:inline-flex;align-items:center;gap:7px;background:#405c78;color:#fff;text-decoration:none;padding:7px 10px;font:600 11px 'DM Sans',Arial,sans-serif}
      .mobile-header .lang-switch{padding:7px 9px}
      .sidebar .top-actions{display:none}
    }
  `;
  document.head.append(styles);

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
