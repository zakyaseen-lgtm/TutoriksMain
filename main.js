(function () {
  var C = window.TUTORIKS;
  if (!C) return;

  var WA_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  var OFFERS = [
    'O Level Physics Tutoring',
    'A Level Chemistry Tutoring',
    'O Level Maths Tutoring',
    'A Level Computer Science Tutoring'
  ];

  function getTrialFaqAnswer() {
    if (C.trialIsFree) {
      return 'Yes. Your first trial session is free. If you are not satisfied, there is no charge.';
    }
    return (
      'Yes. We offer a single trial session at PKR ' +
      C.trialSessionPkr.toLocaleString('en-PK') +
      '. If you proceed, it counts toward your first month.'
    );
  }

  function faqAnswers() {
    return C.faq.map(function (item) {
      return item.q.indexOf('try before') !== -1 ? getTrialFaqAnswer() : item.a;
    });
  }

  function buildWaUrl(text) {
    return (
      'https://wa.me/' +
      C.whatsapp +
      '?text=' +
      encodeURIComponent(text || C.waHome)
    );
  }

  function setWaLinks(selector, text) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.href = buildWaUrl(
        el.getAttribute('data-wa-message') || text || C.waHome
      );
      if (el.classList.contains('btn-whatsapp') && !el.querySelector('svg')) {
        el.insertAdjacentHTML('afterbegin', WA_SVG);
      }
    });
  }

  function setPhoneLinks() {
    document.querySelectorAll('[data-phone]').forEach(function (el) {
      el.href = 'tel:' + C.phone.replace(/\s/g, '');
      if (el.hasAttribute('data-phone-display')) {
        el.textContent = C.phoneDisplay;
      }
    });
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function getInitials(name) {
    return name
      .replace(/\./g, '')
      .split(' ')
      .map(function (w) {
        return w[0];
      })
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  function renderFaq(container) {
    if (!container) return;
    var html = '';
    C.faq.forEach(function (item, i) {
      var answer =
        item.q.indexOf('try before') !== -1 ? getTrialFaqAnswer() : item.a;
      html +=
        '<details><summary>' +
        escapeHtml(item.q) +
        '</summary><div class="faq-a">' +
        escapeHtml(answer) +
        '</div></details>';
    });
    container.innerHTML = html;
  }

  function renderTutors(container, ids) {
    if (!container) return;
    var list = C.tutors.filter(function (t) {
      return !ids || ids.indexOf(t.id) !== -1;
    });
    container.innerHTML = list
      .map(function (t) {
        return (
          '<article class="tutor-card">' +
          '<div class="tutor-avatar" aria-hidden="true">' +
          escapeHtml(t.initials || getInitials(t.name)) +
          '</div><div><h3>' +
          escapeHtml(t.name) +
          '</h3><p class="meta">' +
          escapeHtml(t.qualification) +
          '</p><p class="meta">' +
          escapeHtml(t.experience) +
          '</p><p class="subjects">' +
          escapeHtml(t.subjects.join(' · ')) +
          '</p></div></article>'
        );
      })
      .join('');
  }

  function renderTestimonials(container, items, limit) {
    if (!container || !items) return;
    var slice = limit ? items.slice(0, limit) : items;
    container.innerHTML = slice
      .map(function (t) {
        return (
          '<article class="t-card"><p>“' +
          escapeHtml(t.quote) +
          '”</p><footer><strong>' +
          escapeHtml(t.name) +
          '</strong>' +
          escapeHtml(t.area) +
          ' · ' +
          escapeHtml(t.subject) +
          '</footer></article>'
        );
      })
      .join('');
  }

  function subjectOptions(selected) {
    var subjects = [
      { label: 'Physics', value: 'O/A Level Physics', key: 'physics' },
      { label: 'Chemistry', value: 'O/A Level Chemistry', key: 'chemistry' },
      { label: 'Maths', value: 'O/A Level Maths', key: 'maths' },
      {
        label: 'Computer Science',
        value: 'O/A Level Computer Science',
        key: 'computer science'
      }
    ];
    var selectedText = String(selected || '').toLowerCase();
    return subjects
      .map(function (item) {
        var checked = selectedText.indexOf(item.key) !== -1 ? ' checked' : '';
        return (
          '<label class="choice-pill">' +
          '<input type="checkbox" name="subjects" value="' +
          escapeHtml(item.value) +
          '"' +
          checked +
          '>' +
          '<span>' +
          escapeHtml(item.label) +
          '</span></label>'
        );
      })
      .join('');
  }

  function areaOptions(selected) {
    var selectedText = String(selected || '').toLowerCase();
    var areas = ['DHA', 'Clifton', 'Online'];
    return areas
      .map(function (area) {
        var checked =
          selectedText === area.toLowerCase() ||
          (selectedText.indexOf(area.toLowerCase()) !== -1 &&
            selectedText.indexOf('&') === -1)
            ? ' checked'
            : '';
        return (
          '<label class="choice-pill">' +
          '<input type="radio" name="service_area" value="' +
          escapeHtml(area) +
          '" required' +
          checked +
          '>' +
          '<span>' +
          escapeHtml(area) +
          '</span></label>'
        );
      })
      .join('');
  }

  function upgradeLeadFormOptions(form, lp) {
    if (!form) return;

    var nameInput = form.querySelector('[name="name"]');
    if (nameInput && !form.querySelector('[name="phone"]')) {
      nameInput.insertAdjacentHTML(
        'afterend',
        '<label for="phone">WhatsApp number</label>' +
          '<input type="tel" id="phone" name="phone" required autocomplete="tel" placeholder="03XX XXXXXXX">'
      );
    }

    var subjectInput = form.querySelector('[name="subject"]');
    if (subjectInput && !form.querySelector('[name="subjects"]')) {
      var subjectLabel = form.querySelector('label[for="' + subjectInput.id + '"]');
      subjectInput.insertAdjacentHTML(
        'beforebegin',
        '<fieldset class="choice-field choice-field--subjects">' +
          '<legend>Subjects</legend>' +
          '<div class="choice-grid">' +
          subjectOptions(lp.subject) +
          '</div></fieldset>'
      );
      if (subjectLabel) subjectLabel.parentNode.removeChild(subjectLabel);
      subjectInput.parentNode.removeChild(subjectInput);
    }

    var areaInput = form.querySelector('[name="service_area"], [name="area"]');
    if (areaInput && !form.querySelector('.choice-field--area')) {
      var areaLabel = form.querySelector('label[for="' + areaInput.id + '"]');
      areaInput.insertAdjacentHTML(
        'beforebegin',
        '<fieldset class="choice-field choice-field--area">' +
          '<legend>Area / Online</legend>' +
          '<div class="choice-grid">' +
          areaOptions(lp.area) +
          '</div></fieldset>'
      );
      if (areaLabel) areaLabel.parentNode.removeChild(areaLabel);
      areaInput.parentNode.removeChild(areaInput);
    }
  }

  function checkedValues(form, name) {
    return Array.prototype.map.call(
      form.querySelectorAll('[name="' + name + '"]:checked'),
      function (input) {
        return input.value;
      }
    );
  }

  function initHeader() {
    var header = document.getElementById('siteHeader');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    window.addEventListener(
      'scroll',
      function () {
        if (header) header.classList.toggle('scrolled', window.scrollY > 24);
      },
      { passive: true }
    );
  }

  function initLeadForm(form, lp) {
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var subjects = checkedValues(form, 'subjects');
      var areas = checkedValues(form, 'service_area');
      var name = fd.get('name') || '';
      var phone = fd.get('phone') || '';
      var level = fd.get('level') || lp.level || '';
      var subject = subjects.length ? subjects.join(', ') : fd.get('subject') || lp.subject || '';
      var area = areas.length ? areas.join(', ') : fd.get('service_area') || fd.get('area') || lp.area || '';
      var msg = lp.waPrefill || C.waHome;
      msg += '\n\nI am looking for a premium ' + level + ' ' + subject + ' tutor for ' + area + ' home visits.';
      if (name) msg += '\nName: ' + name;
      if (phone) msg += '\nPhone: ' + phone;
      window.location.href = buildWaUrl(msg);
    });
  }

  function renderLandingExperience(lp) {
    var hero = document.querySelector('.lp-hero');
    if (hero) {
      if (!hero.querySelector('.lp-kicker')) {
        hero.insertAdjacentHTML('afterbegin', '<p class="lp-kicker"></p>');
      }
      var kicker = hero.querySelector('.lp-kicker');
      var h1 = hero.querySelector('h1');
      var lede = hero.querySelector('.lede');
      var heroBtn = null;
      Array.prototype.forEach.call(hero.children, function (child) {
        if (!heroBtn && child.classList && child.classList.contains('btn')) {
          heroBtn = child;
        }
      });
      var trust = hero.querySelector('.trust-bullets');
      var art = hero.querySelector('.lp-hero-art');

      if (kicker) {
        var kickerText = lp.kicker || lp.level + ' ' + lp.subject.replace(lp.level, '').trim();
        var parts = kickerText.split('·').map(function (s) { return s.trim(); });
        kicker.innerHTML = parts.map(function (part) {
          return '<span>' + escapeHtml(part) + '</span>';
        }).join('<span>·</span>');
      }
      if (h1 && lp.h1) h1.textContent = lp.h1;
      if (lede && lp.subheading) lede.textContent = lp.subheading;
      if (heroBtn) heroBtn.textContent = lp.cta || 'Book a 15-minute tutor audit';
      if (trust && lp.bullets) {
        trust.innerHTML = lp.bullets
          .map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
          })
          .join('');
      }
      if (art && !art.querySelector('.lp-hero-metrics')) {
        var subjectName = lp.subject ? lp.subject.replace(/^(O\/A Level\s+|O Level\s+|A Level\s+)/i, '') : 'Tutoring';
        art.insertAdjacentHTML(
          'afterbegin',
          '<div class="lp-hero-metrics">' +
            '<span>O Levels</span>' +
            '<span>A Levels</span>' +
            '<span>' + escapeHtml(subjectName) + '</span>' +
          '</div>'
        );
      }
    }

    var form = document.getElementById('leadForm');
    if (form) {
      var formTitle = form.querySelector('h2');
      var submit = form.querySelector('button[type="submit"]');
      if (formTitle) formTitle.textContent = lp.formTitle || 'Match me with a tutor';
      if (submit) submit.textContent = lp.formCta || 'Match';

      var matchSection = form.closest('.lp-match');
      if (matchSection) {
        var matchCopy = matchSection.querySelector('.lp-match-copy');
        if (matchCopy) {
          var heading = matchCopy.querySelector('h2');
          var descs = matchCopy.querySelectorAll('p:not(.eyebrow)');
          var desc = descs.length > 0 ? descs[descs.length - 1] : null;
          var signalList = matchCopy.querySelector('.lp-signal-list');
          if (heading) heading.textContent = lp.matchTitle || 'A tutor selected, not assigned';
          if (desc) desc.textContent = lp.matchCopy || 'We look at the syllabus, weak chapters, school pace, and exam board before matching your child with an expert.';
          if (signalList && lp.signals) {
            signalList.innerHTML = lp.signals.map(function (item) {
              return '<span>' + escapeHtml(item) + '</span>';
            }).join('');
          }
        }
      }
    }

    if (!document.querySelector('.lp-method')) {
      var method = lp.method || [
        {
          title: 'Diagnose',
          copy: 'We map the exact chapters and paper styles costing marks right now.'
        },
        {
          title: 'Drill',
          copy: 'Lessons revolve around CAIE mark schemes, command words, and timed questions.'
        },
        {
          title: 'Report',
          copy: 'Parents get direct, honest feedback on progress and next priorities.'
        }
      ];
      var html =
        '<section class="lp-method">' +
        '<div class="lp-method-inner">' +
        '<h2>' + escapeHtml(lp.methodTitle || 'A smarter route to exam confidence') + '</h2>' +
        '<p>' + escapeHtml(lp.methodIntro || 'Premium home tutoring should feel structured, measurable, and calm. No vague worksheets. No random tutor lottery.') + '</p>' +
        '<div class="lp-method-grid">' +
        method
          .map(function (item, i) {
            return (
              '<article class="lp-method-card">' +
              '<span>0' + (i + 1) + '</span>' +
              '<h3>' + escapeHtml(item.title) + '</h3>' +
              '<p>' + escapeHtml(item.copy) + '</p>' +
              '</article>'
            );
          })
          .join('') +
        '</div></div></section>';
      var target = document.querySelector('.lp-section');
      if (form && form.parentElement) {
        form.parentElement.insertAdjacentHTML('afterend', html);
      } else if (target) {
        target.insertAdjacentHTML('beforebegin', html);
      }
    }

    var footer = document.querySelector('.lp-footer');
    if (footer && !footer.querySelector('.lp-footer-inner')) {
      var actions = footer.querySelector('.hero-actions');
      footer.innerHTML =
        '<div class="lp-footer-inner">' +
        '<h2>' + escapeHtml(lp.footerTitle || 'Start with the right tutor') + '</h2>' +
        '<p>' + escapeHtml(lp.footerCopy || 'Send us the subject, class, school, and weak chapters. We will recommend the right next step.') + '</p>' +
        '</div>';
      if (actions) footer.querySelector('.lp-footer-inner').appendChild(actions);
    }
  }

  function renderLandingHeroArt() {
    var svg = document.querySelector('.lp-hero-svg');
    if (!svg) return;
    var subject = '';
    if (svg.classList.contains('lp-hero-svg--phys')) subject = 'physics';
    else if (svg.classList.contains('lp-hero-svg--chem')) subject = 'chemistry';
    else if (svg.classList.contains('lp-hero-svg--math')) subject = 'maths';
    else if (svg.classList.contains('lp-hero-svg--cs')) subject = 'cs';
    if (!subject) return;

    var boardItems = '';
    if (subject === 'physics') {
      boardItems =
        '<span class="physics-nucleus"></span>' +
        '<span class="physics-orbit physics-orbit--a"><span class="physics-electron"></span></span>' +
        '<span class="physics-orbit physics-orbit--b"><span class="physics-electron"></span></span>' +
        '<span class="physics-wave"></span>' +
        '<span class="physics-spark physics-spark--one"></span>' +
        '<span class="physics-spark physics-spark--two"></span>';
    } else if (subject === 'chemistry') {
      boardItems =
        '<span class="chem-card chem-card--one"></span>' +
        '<span class="chem-card chem-card--two"></span>' +
        '<span class="chem-bond-line chem-bond-line--one"></span>' +
        '<span class="chem-bond-line chem-bond-line--two"></span>' +
        '<span class="chem-flask-modern"><span></span></span>' +
        '<span class="chem-bubble-modern chem-bubble-modern--one"></span>' +
        '<span class="chem-bubble-modern chem-bubble-modern--two"></span>';
    } else if (subject === 'maths') {
      boardItems =
        '<span class="math-grid-modern"></span>' +
        '<span class="math-curve-modern"></span>' +
        '<span class="math-point-modern"></span>' +
        '<span class="math-equation-chip">f(x)</span>' +
        '<span class="math-ruler"></span>';
    } else if (subject === 'cs') {
      boardItems =
        '<span class="cs-monitor">' +
        '<span class="cs-code-line cs-code-line--one">&lt;/&gt;</span>' +
        '<span class="cs-code-line cs-code-line--two">{ }</span>' +
        '</span>' +
        '<span class="cs-binary cs-binary--one">01</span>' +
        '<span class="cs-binary cs-binary--two">10</span>' +
        '<span class="cs-circuit-path"></span>' +
        '<span class="cs-circuit-node cs-circuit-node--one"></span>' +
        '<span class="cs-circuit-node cs-circuit-node--two"></span>';
    }

    var html =
      '<span class="lp-hero-studio lp-hero-studio--' + subject + '">' +
      '<span class="studio-board">' + boardItems + '</span>' +
      '</span>';

    svg.insertAdjacentHTML('afterend', html);
    svg.parentNode.removeChild(svg);
  }

  function buildFaqSchema() {
    var answers = faqAnswers();
    return {
      '@type': 'FAQPage',
      mainEntity: C.faq.map(function (item, i) {
        return {
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answers[i]
          }
        };
      })
    };
  }

  function buildOrgSchema(extra) {
    var org = {
      '@type': 'EducationalOrganization',
      name: C.name,
      description:
        'Cambridge O/A Level home tutors for students in DHA and Clifton',
      telephone: C.phone,
      url: C.siteUrl,
      areaServed: ['DHA Karachi', 'Clifton Karachi'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: C.address,
        addressLocality: 'Karachi',
        addressCountry: 'PK'
      },
      sameAs: [C.gmbUrl],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tutoring Services',
        itemListElement: OFFERS.map(function (name) {
          return {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: name }
          };
        })
      }
    };
    if (extra) Object.assign(org, extra);
    return org;
  }

  function injectSchema(extra, includeOffers) {
    var script = document.getElementById('schemaJson');
    if (!script) return;
    var org = buildOrgSchema(extra);
    if (!includeOffers && !(extra && extra.hasOfferCatalog)) {
      delete org.hasOfferCatalog;
    }
    var graph = {
      '@context': 'https://schema.org',
      '@graph': [org, buildFaqSchema()]
    };
    script.textContent = JSON.stringify(graph);
  }

  function showUrgency() {
    if (!C.showUrgency) return;
    var el = document.getElementById('urgencyBanner');
    if (el && C.urgencyText) {
      el.textContent = C.urgencyText;
      el.hidden = false;
    }
  }

  function initFooter() {
    var addr = document.getElementById('footerAddress');
    var gmb = document.getElementById('gmbLink');
    if (addr && C.address) addr.textContent = C.address;
    if (gmb && C.gmbUrl) gmb.href = C.gmbUrl;
  }

  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    var blurEls = document.querySelectorAll(
      '.card,.step,.subject-card,.tutor-card,.t-card,.lp-method-card,.lead-form,.filter-card,.outcome-card'
    );
    var textEls = document.querySelectorAll(
      '.hero-title,.hero-lede,.display,.welcome-lede,.section-title,.hero-kicker'
    );
    
    if (!('IntersectionObserver' in window)) return;
    var isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    blurEls.forEach(function (el, i) {
      el.classList.add('reveal-blur');
      if (!isMobile) el.style.transitionDelay = (i % 4) * 0.1 + 's';
    });
    
    textEls.forEach(function (el, i) {
      el.classList.add('reveal-up');
      if (!isMobile) el.style.transitionDelay = (i % 3) * 0.08 + 's';
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );
    
    blurEls.forEach(function (el) { observer.observe(el); });
    textEls.forEach(function (el) { observer.observe(el); });
  }

  function scheduleScrollReveal() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initScrollReveal, { timeout: 2000 });
    } else {
      setTimeout(initScrollReveal, 1);
    }
  }

  function initSubjectCardReactivity() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var cards = document.querySelectorAll('.subject-card');
    if (!cards.length) return;
    cards.forEach(function (card) {
      function update(e) {
        var p = e.touches ? e.touches[0] : e;
        if (!p) return;
        var rect = card.getBoundingClientRect();
        var x = Math.max(0, Math.min(rect.width, p.clientX - rect.left));
        var y = Math.max(0, Math.min(rect.height, p.clientY - rect.top));
        var xp = x / rect.width;
        var yp = y / rect.height;
        card.style.setProperty('--mx', (xp * 100).toFixed(2) + '%');
        card.style.setProperty('--my', (yp * 100).toFixed(2) + '%');
        card.style.setProperty('--tilt-x', ((0.5 - yp) * 8).toFixed(2) + 'deg');
        card.style.setProperty('--tilt-y', ((xp - 0.5) * 10).toFixed(2) + 'deg');
      }
      function reset() {
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '42%');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      }
      card.addEventListener('pointermove', update);
      card.addEventListener('pointerdown', update);
      card.addEventListener('pointerleave', reset);
      card.addEventListener('touchmove', update, { passive: true });
      card.addEventListener('touchend', reset);
    });
  }

  function initMarqueeLogos() {
    var nodes = document.querySelectorAll(
      '.marquee .marquee-logo[data-logo-key]'
    );
    if (!nodes || !nodes.length) return;
    if (!('canvas' in document) || !('localStorage' in window)) return;

    var TEAL = [13, 148, 136];
    var ACCENT = [180, 83, 9];

    var cachePrefix = 'tutoriks_marquee_logo_v1_';
    var targetH = 34;
    var innerTol = 22;
    var outerTol = 70;

    function cacheGet(key) {
      try {
        return localStorage.getItem(cachePrefix + key);
      } catch (e) {
        return null;
      }
    }
    function cacheSet(key, value) {
      try {
        localStorage.setItem(cachePrefix + key, value);
      } catch (e) {}
    }

    var keys = [];
    nodes.forEach(function (n) {
      var k = n.getAttribute('data-logo-key');
      if (k && keys.indexOf(k) === -1) keys.push(k);
    });

    function applyToKey(key, dataUrl) {
      nodes.forEach(function (n) {
        if (n.getAttribute('data-logo-key') === key) {
          var img = n.querySelector('img');
          if (img) {
            img.src = dataUrl;
            img.classList.add('ready');
          }
        }
      });
    }

    function tintLogo(img, cb) {
      // Render logo on a small canvas for performance.
      var iw = img.naturalWidth || img.width;
      var ih = img.naturalHeight || img.height;
      if (!iw || !ih) return cb(null);

      var scale = targetH / ih;
      var tw = Math.max(1, Math.round(iw * scale));
      var th = Math.max(1, Math.round(targetH));

      var canvas = document.createElement('canvas');
      canvas.width = tw;
      canvas.height = th;
      var ctx = canvas.getContext('2d');
      if (!ctx) return cb(null);

      ctx.clearRect(0, 0, tw, th);
      ctx.drawImage(img, 0, 0, tw, th);

      var imageData = ctx.getImageData(0, 0, tw, th);
      var data = imageData.data;

      // Background color keying using corners.
      function sampleCorner(x, y) {
        var idx = (y * tw + x) * 4;
        return [data[idx], data[idx + 1], data[idx + 2]];
      }
      var corners = [
        sampleCorner(0, 0),
        sampleCorner(tw - 1, 0),
        sampleCorner(0, th - 1),
        sampleCorner(tw - 1, th - 1)
      ];
      var bg = [0, 0, 0];
      corners.forEach(function (c) {
        bg[0] += c[0];
        bg[1] += c[1];
        bg[2] += c[2];
      });
      bg[0] /= corners.length;
      bg[1] /= corners.length;
      bg[2] /= corners.length;

      for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        var dr = r - bg[0];
        var dg = g - bg[1];
        var db = b - bg[2];
        var dist = Math.sqrt(dr * dr + dg * dg + db * db);

        var alphaF = (dist - innerTol) / (outerTol - innerTol);
        if (alphaF <= 0) {
          data[i + 3] = 0;
          continue;
        }
        if (alphaF > 1) alphaF = 1;
        var alpha = Math.round(alphaF * 255);
        if (alpha < 8) {
          data[i + 3] = 0;
          continue;
        }

        // Recolor based on original luminance (adds subtle dual-tone).
        var lum = (r + g + b) / 3 / 255; // 0..1
        var t = 1 - lum;
        var nr = Math.round(TEAL[0] * (1 - t) + ACCENT[0] * t);
        var ng = Math.round(TEAL[1] * (1 - t) + ACCENT[1] * t);
        var nb = Math.round(TEAL[2] * (1 - t) + ACCENT[2] * t);

        data[i] = nr;
        data[i + 1] = ng;
        data[i + 2] = nb;
        data[i + 3] = alpha;
      }

      ctx.putImageData(imageData, 0, 0);
      cb(canvas.toDataURL('image/png'));
    }

    // Process each unique logo key (cache result).
    keys.forEach(function (key) {
      var cached = cacheGet(key);
      if (cached) {
        applyToKey(key, cached);
        return;
      }

      var first = null;
      nodes.forEach(function (n) {
        if (n.getAttribute('data-logo-key') === key && !first) first = n;
      });
      if (!first) return;
      var img = first.querySelector('img');
      if (!img) return;

      // Ensure we have the image loaded before processing.
      function run() {
        tintLogo(img, function (dataUrl) {
          if (!dataUrl) return;
          cacheSet(key, dataUrl);
          applyToKey(key, dataUrl);
        });
      }

      if (img.complete && (img.naturalWidth || img.width)) {
        run();
      } else {
        img.addEventListener('load', run, { once: true });
        img.addEventListener('error', function () {}, { once: true });
      }
    });
  }

  function scheduleMarqueeLogos() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initMarqueeLogos, { timeout: 1200 });
    } else {
      setTimeout(initMarqueeLogos, 1);
    }
  }

  function initInteractiveMatchTicket() {
    var matcherCard = document.querySelector('.matcher-card');
    if (!matcherCard) return;

    var selected = {
      level: 'O Level',
      subject: ['Physics'],
      location: 'DHA'
    };

    var summaryEl = document.getElementById('matcherSummary');
    var submitBtn = document.getElementById('matcherSubmit');

    matcherCard.querySelectorAll('.chip').forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.classList.contains('active') ? 'true' : 'false');
    });

    function updateTicket() {
      var level = selected.level;
      var subject = selected.subject;
      var modeStr = '';
      if (selected.location === 'Online') {
        modeStr = 'Online tutoring';
      } else {
        modeStr = selected.location + ' home visits';
      }

      var subjectStr = '';
      if (Array.isArray(subject)) {
        if (subject.length === 1) {
          subjectStr = subject[0];
        } else if (subject.length === 2) {
          subjectStr = subject[0] + ' & ' + subject[1];
        } else {
          subjectStr = subject.slice(0, -1).join(', ') + ' & ' + subject[subject.length - 1];
        }
      } else {
        subjectStr = subject;
      }

      var text = 'I am looking for a premium ' + level + ' ' + subjectStr + ' tutor for ' + modeStr + '.';
      if (summaryEl) {
        summaryEl.innerHTML = 'I am looking for a premium <strong>' + level + '</strong> <strong>' + subjectStr + '</strong> tutor for <strong>' + modeStr + '</strong>.';
      }

      var prefill = "Hi! " + text + " Please recommend the right checked expert tutor.";
      if (submitBtn) {
        submitBtn.href = buildWaUrl(prefill);
      }
    }

    matcherCard.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        var group = chip.parentElement.getAttribute('data-group');
        if (!group) return;

        chip.parentElement.querySelectorAll('.chip').forEach(function (c) {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
        selected[group] = group === 'subject' ? [chip.getAttribute('data-value')] : chip.getAttribute('data-value');
        updateTicket();
      });
    });

    updateTicket();
  }

  function initHome() {
    setWaLinks('[data-wa]');
    setPhoneLinks();
    renderFaq(document.getElementById('faqList'));
    renderTutors(document.getElementById('homeTutors'), null);
    renderTestimonials(
      document.getElementById('homeTestimonials'),
      C.homeTestimonials
    );
    initHeader();
    injectSchema(null, true);
    showUrgency();
    initFooter();
    initSubjectCardReactivity();
    initInteractiveMatchTicket();
    scheduleScrollReveal();
  }

  function initLanding() {
    var slug = document.body.getAttribute('data-lp');
    var lp = C.landingPages[slug];
    if (!lp) return;

    renderLandingExperience(lp);
    renderLandingHeroArt();
    setWaLinks('[data-wa]', lp.waPrefill);
    setPhoneLinks();
    renderFaq(document.getElementById('faqList'));
    renderTutors(document.getElementById('lpTutors'), lp.tutorIds);
    renderTestimonials(document.getElementById('lpTestimonials'), lp.testimonials);
    var leadForm = document.getElementById('leadForm');
    upgradeLeadFormOptions(leadForm, lp);
    initLeadForm(leadForm, lp);

    injectSchema(
      {
        description: lp.h1 + ' — ' + C.name,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Tutoring Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: lp.subject + ' Tutoring' }
            }
          ]
        }
      },
      false
    );
    scheduleScrollReveal();
  }

  if (document.body.classList.contains('lp')) {
    initLanding();
  } else {
    initHome();
  }
})();
