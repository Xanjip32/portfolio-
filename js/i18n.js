/* ─────────────────────────────────────────────
   i18n.js  –  language switching engine
   Requires translations.js loaded first.
   ───────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── helpers ─────────────────────────────── */

  /** Dot-notation lookup: resolve("nav.home", obj) → obj.nav.home */
  function resolve(path, obj) {
    return path.split('.').reduce(function (cur, key) {
      return cur && cur[key] !== undefined ? cur[key] : null;
    }, obj);
  }

  /* ── core API ────────────────────────────── */

  /** Apply translations to every [data-i18n] element on the page */
  function applyLang(lang) {
    lang = lang || 'en';
    var dict = translations[lang];
    if (!dict) return;

    /* textContent (default) */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key   = el.getAttribute('data-i18n');
      var value = resolve(key, dict);
      if (value !== null) el.textContent = value;
    });

    /* attribute overrides: data-i18n-attr="placeholder|alt|content|..." */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var attr  = el.getAttribute('data-i18n-attr');
      var key   = el.getAttribute('data-i18n');
      var value = resolve(key, dict);
      if (value !== null) el.setAttribute(attr, value);
    });

    /* html lang attribute for accessibility / SEO */
    document.documentElement.lang = lang;

    /* update lang toggle label if present */
    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'en' ? 'EN' : 'KO';
  }

  /** Set language, persist to localStorage, re-apply */
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyLang(lang);
  }

  /** Toggle between en and ko */
  function toggleLang() {
    var current = localStorage.getItem('lang') || 'en';
    setLang(current === 'en' ? 'ko' : 'en');
  }

  /* expose to inline onclick handlers */
  window.toggleLang = toggleLang;
  window.setLang    = setLang;

  /** Setup mobile navigation drawer */
  function setupDrawer() {
    var menuBtn = document.getElementById('menuBtn');
    var drawer = document.getElementById('drawer-navigation');
    if (!menuBtn || !drawer) return;

    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      drawer.classList.remove('-translate-x-full');
    });

    var hideBtn = document.querySelector('[data-drawer-hide="drawer-navigation"]');
    if (hideBtn) {
      hideBtn.addEventListener('click', function () {
        drawer.classList.add('-translate-x-full');
      });
    }

    // Close drawer when clicking outside
    document.addEventListener('click', function (e) {
      if (!drawer.classList.contains('-translate-x-full')) {
        if (!drawer.contains(e.target)) {
          drawer.classList.add('-translate-x-full');
        }
      }
    });
  }

  /* ── auto-apply immediately ──────────────── */
  /* Scripts sit at bottom of <body>, so DOM is already ready.
     Use DOMContentLoaded if it hasn't fired yet, otherwise run now. */
  function autoApply() {
    var saved = localStorage.getItem('lang');
    if (!saved) {
      var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      saved = browserLang.startsWith('ko') ? 'ko' : 'en';
    }
    applyLang(saved);
    setupDrawer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoApply);
  } else {
    autoApply();
  }
})();
