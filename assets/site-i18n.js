/* CertiMarch — idiomas da interface */
(() => {
  'use strict';

  const key = 'certimarch.lang';
  const legacyKey = 'trilhacert.lang';
  const homeLabels = { 'pt-BR': 'Página inicial', en: 'Home', es: 'Inicio' };
  const browserLanguages = { pt: 'pt-BR', en: 'en', es: 'es' };
  const listeners = new Set();
  let memory;

  function supported(language) {
    return Object.hasOwn(homeLabels, language);
  }

  function urlLanguage() {
    const language = new URLSearchParams(location.search).get('lang');
    return supported(language) ? language : null;
  }

  function get() {
    const explicit = urlLanguage();
    if (explicit) return explicit;
    try {
      memory = localStorage.getItem(key);
      if (memory === null) {
        memory = localStorage.getItem(legacyKey);
        if (supported(memory)) localStorage.setItem(key, memory);
      }
    } catch {}
    if (supported(memory)) return memory;
    const browser = (navigator.language || '').toLowerCase().split('-')[0];
    return Object.hasOwn(browserLanguages, browser) ? browserLanguages[browser] : 'pt-BR';
  }

  function notify() {
    const language = get();
    for (const listener of listeners) listener(language);
  }

  function select(language) {
    if (!supported(language)) return;
    memory = language;
    try { localStorage.setItem(key, language); } catch {}

    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    if (url.href !== location.href) {
      try {
        history.replaceState(null, '', url);
      } catch {
        location.assign(url.href);
        return;
      }
    }
    notify();
  }

  function withLanguage(href, language = urlLanguage()) {
    const explicit = supported(language) ? language : null;
    if (!explicit) return href;
    const [path, fragment] = href.split('#', 2);
    const [pathname, query] = path.split('?', 2);
    const params = new URLSearchParams(query);
    params.set('lang', explicit);
    return pathname + '?' + params + (fragment === undefined ? '' : '#' + fragment);
  }

  function onChange(listener) {
    listeners.add(listener);
  }

  window.addEventListener('storage', event => {
    if (event.key === key || event.key === legacyKey || event.key === null) notify();
  });
  window.addEventListener('pageshow', notify);
  window.addEventListener('popstate', notify);

  window.trilhaI18n = { get, select, withLanguage, onChange };

  // Os portais traduzidos retornam ao catálogo no idioma da página.
  for (const link of document.querySelectorAll('[data-trilha-home]')) {
    const href = link.getAttribute('href');
    const label = link.querySelector('[data-home-label]');
    const update = language => {
      const portalLanguage = document.documentElement.lang;
      const translated = portalLanguage === 'en' || portalLanguage === 'es';
      const labelLanguage = translated ? portalLanguage : language;
      link.lang = labelLanguage;
      link.href = withLanguage(href, translated ? portalLanguage : urlLanguage());
      label.textContent = homeLabels[labelLanguage];
    };
    onChange(update);
    update(get());
  }
})();
