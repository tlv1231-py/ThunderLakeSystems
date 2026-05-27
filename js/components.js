/* ============================================================
   Shared nav + footer components
   Injected at runtime so markup is maintained in one place.
   ============================================================ */

(function () {

  /* ── Navigation ─────────────────────────────────────────── */
  const NAV_LINKS = [
    { href: 'index.html',        label: 'Home' },
    { href: 'case-studies.html', label: 'Case Studies' },
    { href: 'services.html',     label: 'Services' },
    { href: 'about.html',        label: 'About' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  function buildNavLinks(extraClass = '') {
    return NAV_LINKS.map(l =>
      `<li><a href="${l.href}" data-nav-link class="${extraClass}">${l.label}</a></li>`
    ).join('\n');
  }

  const headerHTML = `
<header class="site-header" role="banner">
  <nav class="nav container" aria-label="Main navigation">
    <a href="index.html" class="nav-logo">Thunder<span>Lake</span> Systems</a>

    <!-- Desktop links -->
    <ul class="nav-links" role="list">
      ${buildNavLinks()}
    </ul>

    <!-- Desktop CTA -->
    <a href="contact.html" class="btn btn-primary nav-cta">Book a Call</a>

    <!-- Mobile toggle -->
    <button class="nav-toggle" aria-controls="nav-drawer" aria-expanded="false" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- Mobile drawer -->
  <nav id="nav-drawer" class="nav-drawer" aria-label="Mobile navigation">
    <ul role="list">
      ${buildNavLinks()}
    </ul>
    <a href="contact.html" class="btn btn-primary">Book a Call</a>
  </nav>
</header>`;


  /* ── Footer ─────────────────────────────────────────────── */
  const year = new Date().getFullYear();

  const footerHTML = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-inner">

      <div class="footer-brand">
        <a href="index.html" class="footer-logo">Thunder<span>Lake</span> Systems</a>
        <p>Workflow modernization for businesses that need reliable systems, not just software.</p>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <h4>Pages</h4>
        <ul role="list">
          <li><a href="index.html">Home</a></li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="footer-contact">
        <h4>Get in Touch</h4>
        <ul role="list">
          <li><a href="contact.html">Book a Call</a></li>
          <li><a href="contact.html">Request an Audit</a></li>
          <li><a href="mailto:tlevander.py@gmail.com">tlevander.py@gmail.com</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <span>&copy; ${year} Thunder Lake Systems. All rights reserved.</span>
      <span>Workflow modernization &amp; automation consulting.</span>
    </div>
  </div>
</footer>`;


  /* ── Inject ──────────────────────────────────────────────── */
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');

  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

})();
