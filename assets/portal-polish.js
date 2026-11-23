/* CertiMarch — no celular, o portal abre com o menu recolhido uma vez por sessão */
(() => {
  'use strict';
  const flag = 'certimarch.mobileFold';
  function fold() {
    const button = document.getElementById('menuFold');
    if (!button || window.innerWidth > 600) return;
    let seen = false;
    try { seen = sessionStorage.getItem(flag) === '1'; sessionStorage.setItem(flag, '1'); } catch {}
    if (seen) return;
    if (button.getAttribute('aria-expanded') === 'true') button.click();
  }
  if (document.readyState === 'complete') setTimeout(fold, 300);
  else window.addEventListener('load', () => setTimeout(fold, 300), { once: true });
})();
