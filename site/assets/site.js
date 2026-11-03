// Mergeflow site: language, theme, recommended download, docs table of contents.
// No network calls, no cookies; preferences stay in this browser's localStorage.
(function () {
  var root = document.documentElement;

  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  // Language: ?lang=fr, then the saved choice, then the browser language.
  var params = new URLSearchParams(location.search);
  var lang = params.get('lang') || load('mergeflow-site-lang') ||
    ((navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');
  if (lang !== 'fr') lang = 'en';
  function applyLang(next) {
    lang = next;
    root.setAttribute('data-lang', next);
    root.setAttribute('lang', next);
    var title = document.querySelector('meta[name="title-' + next + '"]');
    if (title) document.title = title.content;
    // Pause the video of the language being hidden.
    document.querySelectorAll('video').forEach(function (v) {
      if (v.getAttribute('lang') !== next) v.pause();
    });
  }
  applyLang(lang);

  // Theme: saved choice, otherwise follow the system.
  var theme = load('mergeflow-site-theme');
  if (theme === 'light' || theme === 'dark') root.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', function () {
      var next = lang === 'en' ? 'fr' : 'en';
      save('mergeflow-site-lang', next);
      applyLang(next);
    });

    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save('mergeflow-site-theme', next);
    });

    // Highlight the download that fits this computer.
    var ua = navigator.userAgent || '';
    var os = /Windows/.test(ua) ? 'win' : /Mac OS X|Macintosh/.test(ua) ? 'mac' : null;
    if (os) {
      var card = document.querySelector('.dl[data-os="' + os + '"]');
      if (card) card.classList.add('is-recommended');
    }

    // Docs: mark the section being read in the table of contents.
    var links = document.querySelectorAll('.toc a[href^="#"]');
    if (links.length && 'IntersectionObserver' in window) {
      var byId = {};
      links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) { a.classList.remove('active'); });
          var link = byId[entry.target.id];
          if (link) link.classList.add('active');
        });
      }, { rootMargin: '-80px 0px -70% 0px' });
      Object.keys(byId).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
