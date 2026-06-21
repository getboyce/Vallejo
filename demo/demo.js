/* ============================================================================
   Vallejo demo — interactivity layer (vanilla, accessible, zero dependencies)
   ----------------------------------------------------------------------------
   Wires the four components whose state is author-driven rather than native:
     · Tabs (.tab)              — switch active tab + matching .tab-panel[data-tab]
     · Segmented (.segment)     — single-select value switch
     · Filter chip (.chip-filter) — toggles an adjacent .select-menu
     · Select (.select)         — trigger toggles its .select-menu; option sets value

   Native controls (toggle, slider, checkbox, radio) need NO JS — they work on
   their own and are intentionally left alone here.

   Everything is event-delegated off the document, so markup added later still
   works. Visual state is carried by the same ARIA / class hooks the CSS keys
   off (aria-selected, aria-checked, aria-expanded) — no styling lives here.
   ========================================================================== */
(function () {
  'use strict';

  var SELECT_CHEVRON_OPEN = '#icon-chevron-up';
  var SELECT_CHEVRON_CLOSED = '#icon-chevron-down';

  /* -- small helpers -------------------------------------------------------- */
  function closest(el, selector) {
    return el && el.closest ? el.closest(selector) : null;
  }
  function siblingsOf(el, selector) {
    if (!el || !el.parentElement) return [];
    return Array.prototype.filter.call(
      el.parentElement.querySelectorAll(selector),
      function (n) { return n !== el; }
    );
  }
  function setChevron(useEl, href) {
    if (useEl) useEl.setAttribute('href', href);
  }

  /* -- Tabs ----------------------------------------------------------------- */
  /* Clicked tab becomes active; siblings cleared; matching panel shown.       */
  function activateTab(tab) {
    var list = closest(tab, '[role="tablist"], .tabs');
    if (!list) return;

    var tabs = list.querySelectorAll('.tab');
    Array.prototype.forEach.call(tabs, function (t) {
      var active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      if (active) {
        t.setAttribute('aria-current', 'page');
      } else {
        t.removeAttribute('aria-current');
      }
    });

    /* Show the matching panel, if any data-tab panels exist. */
    var key = tab.getAttribute('data-tab');
    if (!key) return;
    var scope = list.parentElement || document;
    var panels = scope.querySelectorAll('.tab-panel[data-tab]');
    Array.prototype.forEach.call(panels, function (p) {
      p.hidden = p.getAttribute('data-tab') !== key;
    });
  }

  /* -- Segmented control ---------------------------------------------------- */
  /* A single white pill slides between segments. We inject one .segmented-indicator
     per track (if absent), then drive its transform + width to match the active
     segment so the selection animates with a smooth slide.                     */

  /* Ensure the track owns exactly one indicator element and is flagged so the
     CSS knows the slide is live (and can suppress the per-segment fallback pill). */
  function ensureIndicator(group) {
    if (!group) return null;
    var indicator = group.querySelector(':scope > .segmented-indicator');
    if (!indicator) {
      indicator = document.createElement('span');
      indicator.className = 'segmented-indicator';
      indicator.setAttribute('aria-hidden', 'true');
      /* Insert as the first child so it paints beneath the labels. */
      group.insertBefore(indicator, group.firstChild);
    }
    group.classList.add('has-indicator');
    return indicator;
  }

  /* Slide the indicator to sit exactly under the active segment of a track.
     transform translateX = the segment's offsetLeft; width = its offsetWidth.  */
  function moveIndicator(group) {
    if (!group) return;
    var indicator = ensureIndicator(group);
    var active =
      group.querySelector('.segment[aria-checked="true"]') ||
      group.querySelector('.segment');
    if (!indicator || !active) return;
    indicator.style.width = active.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + active.offsetLeft + 'px)';
  }

  /* Clicked segment selected; siblings cleared; the pill slides to it.        */
  function selectSegment(seg) {
    var group = closest(seg, '.segmented, [role="radiogroup"]');
    if (!group) return;
    var segs = group.querySelectorAll('.segment');
    Array.prototype.forEach.call(segs, function (s) {
      var on = s === seg;
      s.setAttribute('aria-checked', on ? 'true' : 'false');
      s.classList.toggle('is-selected', on);
    });
    moveIndicator(group);
  }

  /* Place every track's indicator on its currently-selected segment at load. */
  function initSegmented() {
    var groups = document.querySelectorAll('.segmented');
    Array.prototype.forEach.call(groups, function (group) {
      moveIndicator(group);
    });
  }

  /* -- Menus (shared by filter chip + select) ------------------------------- */
  function openMenu(trigger, menu) {
    closeAllMenus(menu);
    if (menu) menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    var useEl = trigger.querySelector('.select-chevron use');
    setChevron(useEl, SELECT_CHEVRON_OPEN);
  }
  function closeMenu(trigger, menu) {
    if (menu) menu.hidden = true;
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      var useEl = trigger.querySelector('.select-chevron use');
      setChevron(useEl, SELECT_CHEVRON_CLOSED);
    }
  }
  function menuFor(trigger) {
    var id = trigger.getAttribute('aria-controls');
    if (id) {
      var byId = document.getElementById(id);
      if (byId) return byId;
    }
    /* Fall back to the next .select-menu sibling. */
    var sib = trigger.nextElementSibling;
    while (sib) {
      if (sib.classList && sib.classList.contains('select-menu')) return sib;
      sib = sib.nextElementSibling;
    }
    return null;
  }
  function closeAllMenus(except) {
    var triggers = document.querySelectorAll(
      '.select[aria-expanded="true"], .chip-filter[aria-expanded="true"]'
    );
    Array.prototype.forEach.call(triggers, function (t) {
      var m = menuFor(t);
      if (m === except) return;
      closeMenu(t, m);
    });
  }
  function toggleMenu(trigger) {
    var menu = menuFor(trigger);
    if (trigger.getAttribute('aria-expanded') === 'true') {
      closeMenu(trigger, menu);
    } else {
      openMenu(trigger, menu);
    }
  }

  /* -- Select option pick --------------------------------------------------- */
  /* Sets the trigger's displayed value + the selected register, then closes.  */
  function pickOption(option, menu) {
    var labelEl = option.querySelector('.select-option-label');
    var label = (labelEl ? labelEl.textContent : option.textContent).trim();

    /* Multi-select menu: toggle ONLY the clicked row, mirror its checkbox,
       keep the menu open, and show a count on the chip. */
    if (menu.getAttribute('aria-multiselectable') === 'true') {
      var nowSelected = option.getAttribute('aria-selected') !== 'true';
      option.setAttribute('aria-selected', nowSelected ? 'true' : 'false');
      var box = option.querySelector('.checkbox');
      if (box) {
        if (nowSelected) { box.setAttribute('data-checked', 'true'); }
        else { box.removeAttribute('data-checked'); }
      }
      var selected = menu.querySelectorAll('.select-option[aria-selected="true"]');
      var multiTrigger = document.querySelector('[aria-controls="' + menu.id + '"]');
      if (multiTrigger) {
        var dimension = multiTrigger.getAttribute('data-dimension') || '';
        var firstNode = multiTrigger.firstChild;
        if (firstNode && firstNode.nodeType === 3) {
          var text = dimension;
          if (selected.length === 1) {
            var only = selected[0].querySelector('.select-option-label');
            text = only ? only.textContent.trim() : dimension;
          } else if (selected.length > 1) {
            text = dimension + ' (' + selected.length + ')';
          }
          firstNode.textContent = text + ' ';
        }
        multiTrigger.classList.toggle('chip-filter-active', selected.length > 0);
      }
      return;
    }

    /* Move the selected register to the picked row. */
    var options = menu.querySelectorAll('.select-option');
    Array.prototype.forEach.call(options, function (o) {
      o.setAttribute('aria-selected', o === option ? 'true' : 'false');
    });

    /* Find the trigger that owns this menu and update its value. */
    var trigger = document.querySelector('[aria-controls="' + menu.id + '"]');
    if (!trigger && menu.previousElementSibling) {
      trigger = menu.previousElementSibling;
    }
    if (trigger) {
      var valueEl = trigger.querySelector('.select-value');
      if (valueEl) {
        valueEl.textContent = label;
      } else {
        /* Filter chip: keep its chevron, replace the leading text node. */
        var first = trigger.firstChild;
        if (first && first.nodeType === 3) {
          first.textContent = label + ' ';
        }
      }
      closeMenu(trigger, menu);
      trigger.focus();
    }
  }

  /* -- Global click delegation --------------------------------------------- */
  document.addEventListener('click', function (e) {
    var target = e.target;

    var tab = closest(target, '.tab');
    if (tab && !tab.hasAttribute('disabled') &&
        tab.getAttribute('aria-disabled') !== 'true') {
      activateTab(tab);
      return;
    }

    var seg = closest(target, '.segment');
    if (seg && !seg.hasAttribute('disabled') &&
        seg.getAttribute('aria-disabled') !== 'true') {
      selectSegment(seg);
      return;
    }

    var option = closest(target, '.select-option');
    if (option && option.getAttribute('aria-disabled') !== 'true') {
      var ownerMenu = closest(option, '.select-menu');
      if (ownerMenu) {
        pickOption(option, ownerMenu);
        return;
      }
    }

    var selectTrigger = closest(target, '.select');
    if (selectTrigger && !selectTrigger.disabled) {
      e.preventDefault();
      toggleMenu(selectTrigger);
      return;
    }

    var chip = closest(target, '.chip-filter');
    if (chip && !chip.hasAttribute('disabled') &&
        chip.getAttribute('aria-disabled') !== 'true') {
      toggleMenu(chip);
      return;
    }

    /* Click-away — close any open menu. */
    if (!closest(target, '.select-menu')) {
      closeAllMenus(null);
    }
  });

  /* -- Keyboard ------------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    /* Escape closes any open menu and returns focus to its trigger. */
    if (e.key === 'Escape') {
      var openTrigger = document.querySelector(
        '.select[aria-expanded="true"], .chip-filter[aria-expanded="true"]'
      );
      if (openTrigger) {
        closeMenu(openTrigger, menuFor(openTrigger));
        openTrigger.focus();
        e.preventDefault();
      }
      return;
    }

    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;

    var target = e.target;

    /* Tabs + segments respond to Enter/Space like a click. */
    var tab = closest(target, '.tab');
    if (tab) {
      e.preventDefault();
      activateTab(tab);
      return;
    }
    var seg = closest(target, '.segment');
    if (seg) {
      e.preventDefault();
      selectSegment(seg);
      return;
    }
    /* Select options are <li> (not focusable by default), but support keys if
       an author makes one focusable. */
    var option = closest(target, '.select-option');
    if (option) {
      var ownerMenu = closest(option, '.select-menu');
      if (ownerMenu) {
        e.preventDefault();
        pickOption(option, ownerMenu);
      }
    }
  });

  /* -- Init + keep the segmented pill aligned ------------------------------- */
  /* Position each indicator on its selected segment once the DOM is ready, and
     re-measure on resize so the pill stays glued to the active segment's box. */
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }
  onReady(initSegmented);
  window.addEventListener('resize', initSegmented);

  /* -- Section index scroll-spy --------------------------------------------- */
  /* Highlight the section currently in view in the .demo-section-nav, and keep
     that link centered in the (horizontally scrollable) strip. Anchor clicks
     scroll natively (CSS scroll-behavior + scroll-padding-top handle the jump). */
  function initSectionNav() {
    var inner = document.querySelector('.demo-section-nav-inner');
    if (!inner || !('IntersectionObserver' in window)) return;
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var links = {};
    var sections = [];
    Array.prototype.forEach.call(
      inner.querySelectorAll('.demo-section-nav-link'),
      function (a) {
        var id = (a.getAttribute('href') || '').replace(/^#/, '');
        var el = id && document.getElementById(id);
        if (el) { links[id] = a; sections.push(el); }
      }
    );

    var current = null;
    function setActive(id) {
      if (id === current || !links[id]) return;
      current = id;
      Object.keys(links).forEach(function (key) {
        var on = key === id;
        links[key].classList.toggle('is-active', on);
        if (on) { links[key].setAttribute('aria-current', 'location'); }
        else { links[key].removeAttribute('aria-current'); }
      });
      /* Center the active link in the strip (horizontal only) — robust to
         positioning via getBoundingClientRect deltas. */
      var navRect = inner.getBoundingClientRect();
      var aRect = links[id].getBoundingClientRect();
      var delta = (aRect.left + aRect.width / 2) - (navRect.left + inner.clientWidth / 2);
      inner.scrollBy({ left: delta, behavior: reduce ? 'auto' : 'smooth' });
    }

    /* Track every section crossing the band just below the sticky bars; the
       topmost one in that band is the active section. */
    var inView = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { inView[e.target.id] = true; }
        else { delete inView[e.target.id]; }
      });
      var ids = Object.keys(inView);
      if (!ids.length) return;
      /* Prefer a specific pattern block (.demo-block, e.g. #icons or a component)
         over its enclosing group section (.demo-section, e.g. #foundations) when
         both are in view — so a nested link like Icons wins inside Foundations.
         Within the chosen tier, the topmost in-view section is active. */
      var blocks = ids.filter(function (id) {
        var el = document.getElementById(id);
        return el && el.classList.contains('demo-block');
      });
      var pool = blocks.length ? blocks : ids;
      pool.sort(function (a, b) {
        return document.getElementById(a).getBoundingClientRect().top -
               document.getElementById(b).getBoundingClientRect().top;
      });
      setActive(pool[0]);
    }, { rootMargin: '-120px 0px -65% 0px', threshold: 0 });

    sections.forEach(function (s) { io.observe(s); });
  }
  onReady(initSectionNav);
})();
