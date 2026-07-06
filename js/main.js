/* ============================================================
   Thunder Lake Systems — Main JS
   Mobile nav, active link state, smooth interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Active nav link -----------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });


  // --- Mobile nav toggle ---------------------------------------------
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      toggle.classList.toggle('open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  // --- Scroll-triggered header shadow --------------------------------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 4
        ? '0 2px 16px rgba(0,0,0,.07)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }


  // --- Hero word cycling ---------------------------------------------
  const cycleEl = document.querySelector('.cycle-word');
  if (cycleEl) {
    const words = ['accelerate.', 'compete.', 'win.', 'survive.'];
    let idx = 0;

    function nextWord() {
      cycleEl.style.animation = 'cycle-out .28s ease forwards';

      setTimeout(() => {
        idx = (idx + 1) % words.length;
        cycleEl.textContent = words[idx];
        cycleEl.style.animation = 'none';
        void cycleEl.offsetHeight; // force reflow so browser resets animation state
        cycleEl.style.animation = 'cycle-in .28s ease forwards';
        setTimeout(() => { cycleEl.style.animation = ''; }, 280);
      }, 280);
    }

    setInterval(nextWord, 2400);
  }


  // --- Contact form (placeholder submit) -----------------------------
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Message sent — I\'ll be in touch shortly.';
      btn.disabled = true;
      btn.style.background = '#16a34a';
    });
  }

});
