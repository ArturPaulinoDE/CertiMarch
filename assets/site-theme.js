/* Trilha Cert — tema compartilhado */
(() => {
  'use strict';

  const key = 'trilhacert.theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let memory;

  function get() {
    try {
      memory = localStorage.getItem(key);
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
      if (event.key === key || event.key === null) sync();
    });
    window.addEventListener('pageshow', sync);
    system.addEventListener('change', sync);
  }

  window.trilhaTheme = { get, set, onChange };
})();
