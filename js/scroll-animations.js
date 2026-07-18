(() => {
  if (typeof anime === 'undefined') return;

  /* ── Helpers ── */
  function show(el) { el.style.opacity = '1'; el.style.transform = 'none'; }
  function hide(el, extras) {
    el.style.opacity = '0';
    el.style.transform = extras || 'translateY(30px)';
  }

  function staggerReveal(container, selector, opts) {
    const els = container.querySelectorAll(selector);
    if (!els.length) return;
    els.forEach(function(el) { hide(el, opts.from); });
    anime({
      targets: els,
      opacity: [0, 1],
      translateY: opts.translateY || [30, 0],
      translateX: opts.translateX || [0, 0],
      scale: opts.scale || [1, 1],
      duration: opts.duration || 600,
      delay: anime.stagger(opts.stagger || 80),
      easing: 'easeOutCubic',
      begin: function() { els.forEach(function(el) { show(el); }); }
    });
  }

  /* ══════════════════════════════════════
     1. SKILLS SECTION
  ══════════════════════════════════════ */
  function animateSkills(section) {
    var header = section.querySelector('.text-white > .text-lg');
    var focusCards = section.querySelectorAll('.grid.grid-cols-2 > div, .xl\\:grid-cols-4 > div');
    var techCols = section.querySelectorAll('.lg\\:grid-cols-3 > div');
    var progressBars = section.querySelectorAll('.h-2 > div');

    // Header
    if (header) {
      hide(header);
      anime({ targets: header, opacity: [0,1], translateY: [20,0], duration: 500, easing: 'easeOutCubic', begin: function(){ show(header); } });
    }

    // Focus cards stagger
    if (focusCards.length) {
      focusCards.forEach(function(c) { hide(c); });
      anime({
        targets: focusCards,
        opacity: [0,1], translateY: [25,0], scale: [0.95,1],
        duration: 500, delay: anime.stagger(70),
        easing: 'easeOutCubic',
        begin: function(){ focusCards.forEach(function(c){ show(c); }); }
      });
    }

    // Tech stack columns
    if (techCols.length) {
      techCols.forEach(function(c) { hide(c, 'translateX(-30px)'); });
      anime({
        targets: techCols,
        opacity: [0,1], translateX: [-30,0],
        duration: 600, delay: anime.stagger(100),
        easing: 'easeOutCubic',
        begin: function(){ techCols.forEach(function(c){ show(c); }); }
      });
    }

    // Progress bars
    if (progressBars.length) {
      var barWidths = [];
      progressBars.forEach(function(bar) {
        barWidths.push(bar.style.width || getComputedStyle(bar).width);
        bar.style.width = '0%';
      });
      anime({
        targets: progressBars,
        width: function(el, i) { return barWidths[i]; },
        duration: 1200, delay: anime.stagger(150, { start: 400 }),
        easing: 'easeOutCubic'
      });
    }
  }

  /* ══════════════════════════════════════
     2. TIMELINE SECTION
  ══════════════════════════════════════ */
  function animateTimeline(section) {
    var line = section.querySelector('.absolute.left-0');
    var items = section.querySelectorAll('.relative.ml-3 > .relative');

    // Vertical line grow
    if (line) {
      line.style.transform = 'scaleY(0)';
      line.style.transformOrigin = 'top';
      anime({ targets: line, scaleY: [0,1], duration: 800, easing: 'easeOutCubic' });
    }

    // Dots and content stagger
    if (items.length) {
      items.forEach(function(item) {
        var dot = item.querySelector('.absolute.-left-\\[33px\\]');
        var content = item.querySelector('div:not(.absolute)');
        if (dot) { hide(dot, 'scale(0)'); }
        if (content) { hide(content, 'translateX(-20px)'); }
      });

      items.forEach(function(item, i) {
        var dot = item.querySelector('.absolute.-left-\\[33px\\]');
        var content = item.querySelector('div:not(.absolute)');
        var delay = i * 150;

        if (dot) {
          anime({ targets: dot, opacity: [0,1], scale: [0,1], duration: 400, delay: delay, easing: 'easeOutBack', begin: function(){ show(dot); } });
        }
        if (content) {
          anime({ targets: content, opacity: [0,1], translateX: [-20,0], duration: 500, delay: delay + 100, easing: 'easeOutCubic', begin: function(){ show(content); } });
        }
      });
    }
  }

  /* ══════════════════════════════════════
     3. PROJECTS SECTION
  ══════════════════════════════════════ */
  function animateProjects(section) {
    var header = section.querySelector('.mb-14');
    var feature = section.querySelector('.overflow-hidden.rounded-2xl');
    var smallCards = section.querySelectorAll('.md\\:grid-cols-2 > div');
    var gridCards = section.querySelectorAll('.lg\\:grid-cols-4 > div');
    var odinSection = section.querySelector('.lg\\:grid-cols-6');
    var odinCards = odinSection ? odinSection.querySelectorAll('a') : [];

    // Header
    if (header) {
      hide(header);
      anime({ targets: header, opacity: [0,1], translateY: [20,0], duration: 500, easing: 'easeOutCubic', begin: function(){ show(header); } });
    }

    // Featured project
    if (feature) {
      hide(feature, 'translateY(40px) scale(0.98)');
      anime({
        targets: feature,
        opacity: [0,1], translateY: [40,0], scale: [0.98,1],
        duration: 700, easing: 'easeOutCubic',
        begin: function(){ show(feature); }
      });
    }

    // Small project cards
    if (smallCards.length) {
      smallCards.forEach(function(c) { hide(c); });
      anime({ targets: smallCards, opacity: [0,1], translateY: [30,0], duration: 500, delay: anime.stagger(100), easing: 'easeOutCubic', begin: function(){ smallCards.forEach(function(c){ show(c); }); } });
    }

    // Grid project cards
    if (gridCards.length) {
      gridCards.forEach(function(c) { hide(c); });
      anime({ targets: gridCards, opacity: [0,1], translateY: [25,0], scale: [0.96,1], duration: 450, delay: anime.stagger(80), easing: 'easeOutCubic', begin: function(){ gridCards.forEach(function(c){ show(c); }); } });
    }

    // Odin grid
    if (odinCards.length) {
      odinCards.forEach(function(c) { hide(c, 'scale(0.8)'); });
      anime({ targets: odinCards, opacity: [0,1], scale: [0.8,1], duration: 350, delay: anime.stagger(50, { start: 300 }), easing: 'easeOutCubic', begin: function(){ odinCards.forEach(function(c){ show(c); }); } });
    }
  }

  /* ══════════════════════════════════════
     4. ABOUT SECTION
  ══════════════════════════════════════ */
  function animateAbout(section) {
    var photo = section.querySelector('img');
    var textBlocks = section.querySelectorAll('.lg\\:col-span-\\[1fr\\] > *');

    // Photo scale-in
    if (photo) {
      var wrapper = photo.parentElement;
      hide(wrapper, 'scale(0.9)');
      anime({ targets: wrapper, opacity: [0,1], scale: [0.9,1], duration: 700, easing: 'easeOutCubic', begin: function(){ show(wrapper); } });
    }

    // Text blocks stagger
    if (textBlocks.length) {
      textBlocks.forEach(function(b) { hide(b, 'translateX(-20px)'); });
      anime({
        targets: textBlocks,
        opacity: [0,1], translateX: [-20,0],
        duration: 500, delay: anime.stagger(80, { start: 200 }),
        easing: 'easeOutCubic',
        begin: function(){ textBlocks.forEach(function(b){ show(b); }); }
      });
    }
  }

  /* ══════════════════════════════════════
     5. LANGUAGES SECTION
  ══════════════════════════════════════ */
  function animateLanguages(section) {
    var header = section.querySelector('.mb-14');
    var langPairs = section.querySelectorAll('.mb-16 > .flex');
    var table = section.querySelector('table');

    // Header
    if (header) {
      hide(header);
      anime({ targets: header, opacity: [0,1], translateY: [20,0], duration: 500, easing: 'easeOutCubic', begin: function(){ show(header); } });
    }

    // Language card pairs (alternating slide direction)
    if (langPairs.length) {
      langPairs.forEach(function(pair, i) {
        var cards = pair.querySelectorAll(':scope > div');
        if (!cards.length) return;
        var dir = i % 2 === 0 ? -30 : 30;
        cards.forEach(function(c) { hide(c, 'translateX(' + dir + 'px)'); });
        anime({
          targets: cards,
          opacity: [0,1], translateX: [dir, 0],
          duration: 600, delay: anime.stagger(100),
          easing: 'easeOutCubic',
          begin: function(){ cards.forEach(function(c){ show(c); }); }
        });
      });
    }

    // Table rows
    if (table) {
      var rows = table.querySelectorAll('tbody tr');
      if (rows.length) {
        rows.forEach(function(r) { hide(r); });
        anime({ targets: rows, opacity: [0,1], translateY: [15,0], duration: 400, delay: anime.stagger(80, { start: 300 }), easing: 'easeOutCubic', begin: function(){ rows.forEach(function(r){ show(r); }); } });
      }
    }
  }

  /* ══════════════════════════════════════
     6. CERTIFICATES SECTION
  ══════════════════════════════════════ */
  function animateCertificates(section) {
    var header = section.querySelector('.mb-14');
    var cards = section.querySelectorAll('.md\\:grid-cols-2, .lg\\:grid-cols-3');

    // Header
    if (header) {
      hide(header);
      anime({ targets: header, opacity: [0,1], translateY: [20,0], duration: 500, easing: 'easeOutCubic', begin: function(){ show(header); } });
    }

    // Cards
    if (cards.length) {
      var allCards = section.querySelectorAll('.grid > div');
      if (allCards.length) {
        allCards.forEach(function(c) { hide(c, 'scale(0.95)'); });
        anime({ targets: allCards, opacity: [0,1], scale: [0.95,1], duration: 500, delay: anime.stagger(100), easing: 'easeOutCubic', begin: function(){ allCards.forEach(function(c){ show(c); }); } });
      }
    }
  }

  /* ══════════════════════════════════════
     7. CONTACT SECTION
  ══════════════════════════════════════ */
  function animateContact(section) {
    var form = section.querySelector('.lg\\:grid-cols-\\[1fr_300px\\] > div:first-child');
    var sidebar = section.querySelector('.lg\\:grid-cols-\\[1fr_300px\\] > div:last-child');

    // Form slide from left
    if (form) {
      hide(form, 'translateX(-30px)');
      anime({ targets: form, opacity: [0,1], translateX: [-30,0], duration: 600, easing: 'easeOutCubic', begin: function(){ show(form); } });
    }

    // Sidebar slide from right
    if (sidebar) {
      hide(sidebar, 'translateX(30px)');
      anime({ targets: sidebar, opacity: [0,1], translateX: [30,0], duration: 600, delay: 150, easing: 'easeOutCubic', begin: function(){ show(sidebar); } });

      // Social icons bounce stagger
      var icons = sidebar.querySelectorAll('li');
      if (icons.length) {
        icons.forEach(function(li) { hide(li, 'scale(0.5)'); });
        anime({ targets: icons, opacity: [0,1], scale: [0.5,1], duration: 400, delay: anime.stagger(80, { start: 400 }), easing: 'easeOutBack', begin: function(){ icons.forEach(function(li){ show(li); }); } });
      }
    }
  }

  /* ══════════════════════════════════════
     SECTION ROUTER
  ══════════════════════════════════════ */
  var sectionMap = {
    'home': animateSkills,
    'projects': animateProjects,
    'about': animateAbout,
    'languages': animateLanguages,
    'certificates': animateCertificates,
    'contact': animateContact
  };

  // Timeline section has no id — it's the section before #projects
  var allSections = document.querySelectorAll('main > section');
  var timelineSection = null;
  allSections.forEach(function(s) {
    if (!s.id && s.querySelector('.relative.ml-3')) {
      timelineSection = s;
    }
  });
  if (timelineSection) {
    sectionMap[timelineSection.className] = animateTimeline;
  }

  /* ══════════════════════════════════════
     INTERSECTION OBSERVER
  ══════════════════════════════════════ */
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var section = entry.target;
      var id = section.id || section.className;
      var fn = sectionMap[id];
      if (fn) {
        fn(section);
        observer.unobserve(section);
      }
    });
  }, { threshold: 0.12 });

  allSections.forEach(function(s) { observer.observe(s); });

  /* ── Also handle the skills sub-section (no id, inside #home) ── */
  var skillsSection = document.querySelector('#home + section, section.bg-\\[var\\(--bg-color\\)\\]');
  if (skillsSection && !skillsSection.id) {
    // This is the skills section right after hero
    var skillsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        animateSkills(entry.target);
        skillsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    skillsObserver.observe(skillsSection);
  }

})();
