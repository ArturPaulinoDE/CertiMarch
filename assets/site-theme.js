/* CertiMarch — tema compartilhado */
(() => {
  'use strict';

  const key = 'certimarch.theme';
  const legacyKey = 'trilhacert.theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let memory;

  function get() {
    try {
      memory = localStorage.getItem(key);
      if (memory === null) {
        memory = localStorage.getItem(legacyKey);
        if (memory !== null) localStorage.setItem(key, memory);
      }
    } catch {}
    return memory === 'light' || memory === 'dark'
      ? memory
      : system.matches ? 'dark' : 'light';
  }

  function set(theme) {
    memory = theme;
    try { localStorage.setItem(key, theme); } catch {}
  }

  function onChange(update) {
    const sync = () => update(get());
    window.addEventListener('storage', event => {
      if (event.key === key || event.key === legacyKey || event.key === null) sync();
    });
    window.addEventListener('pageshow', sync);
    system.addEventListener('change', sync);
  }

  window.trilhaTheme = { get, set, onChange };
})();
