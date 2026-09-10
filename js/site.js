(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;

  button?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  const progress = document.querySelector('.reading-progress span');
  const updateProgress = () => {
    const available = document.documentElement.scrollHeight - innerHeight;
    const ratio = available > 0 ? scrollY / available : 0;
    if (progress) progress.style.width = `${Math.min(100, ratio * 100)}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const links = [...document.querySelectorAll('#TOC a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();

