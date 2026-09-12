document.addEventListener('DOMContentLoaded', () => {
  const sadoContent = sadoLoadContent();
  sadoApplyContent(sadoContent);

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const text = encodeURIComponent(
        `Salom SADO Travel!\nIsmim: ${name}\nTelefon: ${phone}\nXabar: ${message || "—"}`
      );
      window.open(`https://ig.me/m/${sadoContent.igUsername}?text=${text}`, '_blank');
      form.reset();
    });
  }
});
