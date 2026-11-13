document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.lang-switch');
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('cv-language') || 'en'; } catch (_) { /* storage may be disabled */ }

  function setLanguage(language) {
    const isChinese = language === 'zh';
    document.body.classList.toggle('lang-zh', isChinese);
    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    buttons.forEach((button) => {
      button.textContent = isChinese ? 'EN' : '中文';
      button.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
    });
    try { localStorage.setItem('cv-language', language); } catch (_) { /* storage may be disabled */ }
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    setLanguage(document.body.classList.contains('lang-zh') ? 'en' : 'zh');
  }));
  setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
});
