'use strict';

const i18n = window.trilhaI18n;
let language = i18n.get();
let copy = catalogTranslations[language];

const cards = [...document.querySelectorAll('.cert-card')];
const languageButtons = [...document.querySelectorAll('[data-language]')];
const indexLink = document.querySelector('[data-index-link]');
const indexHref = indexLink.getAttribute('href');
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.getElementById('search');
const clearSearch = document.getElementById('search-clear');
const clearFilters = document.getElementById('clear-filters');
const count = document.getElementById('results-count');
const empty = document.getElementById('no-results');
const vendors = new Set(filters.map(button => button.dataset.filter));

function normalize(value) {
  return value.normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const entries = cards.map(card => {
  const code = card.dataset.cert;
  const certification = card.querySelector('.cert-key').textContent;
  const title = card.querySelector('[data-card-title]');
  const detail = card.querySelector('[data-card-description]');
  const link = card.querySelector('[data-portal-link]');
  const notice = card.querySelector('[data-portal-language]');
  const href = link.getAttribute('href');
  const localized = Object.values(catalogTranslations).flatMap(languageCopy => languageCopy.cards[code] || []);
  const terms = normalize([title.textContent, detail.textContent, certification, card.dataset.keywords, ...localized].join(' '));
  return { card, vendor: card.dataset.vendor, code, certification, title, detail, link, href, notice, terms, aliases: terms.replaceAll(' ', '') };
});

let vendor = 'todos';

function readFilters() {
  const params = new URLSearchParams(window.location.search);
  const candidate = params.get('vendor');
  vendor = vendors.has(candidate) ? candidate : 'todos';
  search.value = params.get('q') || '';
  render();
}

function updateAddress(push) {
  const url = new URL(window.location.href);
  if (vendor === 'todos') url.searchParams.delete('vendor');
  else url.searchParams.set('vendor', vendor);

  const query = search.value.trim();
  if (query) url.searchParams.set('q', query);
  else url.searchParams.delete('q');

  if (url.href === window.location.href) return;
  try {
    if (push) window.history.pushState(null, '', url);
    else window.history.replaceState(null, '', url);
  } catch {
    // Filtering still works when the browser restricts history for local files.
  }
}

function render() {
  const query = normalize(search.value);
  const parts = query.split(' ');
  const fitsVendor = entry => vendor === 'todos' || vendor === entry.vendor;
  const exactPhrase = query.includes(' ') && entries.some(entry => fitsVendor(entry) && entry.terms.includes(query));
  let visible = 0;

  for (const entry of entries) {
    const fitsQuery = exactPhrase ? entry.terms.includes(query)
      : parts.every(part => entry.terms.includes(part) || entry.aliases.includes(part));
    entry.card.hidden = !(fitsVendor(entry) && fitsQuery);
    if (!entry.card.hidden) visible++;
  }

  for (const button of filters) {
    button.setAttribute('aria-pressed', String(button.dataset.filter === vendor));
  }

  count.textContent = visible === 1
    ? copy.oneResult
    : copy.results.replace('{count}', new Intl.NumberFormat(language).format(visible));
  empty.hidden = visible !== 0;
  clearSearch.hidden = search.value.length === 0;
}

for (const button of filters) {
  const label = button.querySelector('[data-vendor-count]');
  label.textContent = button.dataset.filter === 'todos'
    ? entries.length
    : entries.filter(entry => entry.vendor === button.dataset.filter).length;
  button.addEventListener('click', () => {
    vendor = button.dataset.filter;
    render();
    updateAddress(true);
  });
}

search.addEventListener('input', () => {
  render();
  updateAddress(false);
});

function resetSearch() {
  search.value = '';
  render();
  updateAddress(false);
  search.focus();
}

clearSearch.addEventListener('click', resetSearch);
search.addEventListener('keydown', event => {
  if (event.key === 'Escape' && search.value) {
    event.preventDefault();
    resetSearch();
  }
});

clearFilters.addEventListener('click', () => {
  vendor = 'todos';
  search.value = '';
  render();
  updateAddress(true);
  search.focus();
});

document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault();
  render();
  updateAddress(false);
});

window.addEventListener('popstate', readFilters);
readFilters();
document.getElementById('catalog-controls').hidden = false;

const themeButton = document.getElementById('theme');

function applyTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', dark ? copy.lightTheme : copy.darkTheme);
  themeButton.title = copy.theme;
  themeButton.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#151222' : '#f7f7fb';
}

if (window.trilhaTheme) {
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    window.trilhaTheme.set(theme);
    applyTheme(theme);
  });
  window.trilhaTheme.onChange(applyTheme);
  applyTheme(window.trilhaTheme.get());
  themeButton.hidden = false;
}

function translate(next) {
  language = next;
  copy = catalogTranslations[language];
  document.documentElement.lang = language;

  for (const node of document.querySelectorAll('[data-i18n]')) {
    node.textContent = copy[node.dataset.i18n];
  }

  for (const [attribute, key] of [
    ['aria-label', 'label'], ['placeholder', 'placeholder'], ['content', 'content'],
  ]) {
    for (const node of document.querySelectorAll('[data-i18n-' + key + ']')) {
      node.setAttribute(attribute, copy[node.getAttribute('data-i18n-' + key)]);
    }
  }

  for (const button of languageButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  }

  indexLink.href = i18n.withLanguage(indexHref);
  for (const entry of entries) {
    const localizedCard = copy.cards[entry.code];
    if (localizedCard) [entry.title.textContent, entry.detail.textContent] = localizedCard;
    const translatedHref = language === 'en' ? entry.link.dataset.hrefEn
      : language === 'es' ? entry.link.dataset.hrefEs
      : null;

    const portalLocale = translatedHref ? language : 'pt-BR';
    entry.link.href = i18n.withLanguage(translatedHref || entry.href, language);
    entry.link.hreflang = portalLocale;
    const name = entry.title.textContent + ' (' + entry.certification.trim() + ')';
    entry.link.setAttribute('aria-label', copy.openPortalLabel.replace('{name}', name));
    entry.notice.textContent = copy.portalLanguage;
    entry.notice.hidden = language === 'pt-BR' || Boolean(translatedHref);
  }

  applyTheme(document.documentElement.dataset.theme || 'light');
  render();
}

for (const button of languageButtons) {
  button.addEventListener('click', () => i18n.select(button.dataset.language));
}
i18n.onChange(translate);
translate(language);
document.getElementById('language-picker').hidden = false;
