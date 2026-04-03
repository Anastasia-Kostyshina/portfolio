document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mogal-btn');
  const modal = document.querySelector('.mogal-window');
  const iconOpen = btn.querySelector('svg.lucide-message-circle');
  const iconClose = btn.querySelector('svg.lucide-x');

  // Функция открытия модалки
  function openModal() {
    btn.classList.add('pointer-events-none');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    setTimeout(() => btn.classList.remove('pointer-events-none'), 300);
  }

  // Функция закрытия модалки
  function closeModal() {
    btn.classList.add('pointer-events-none');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      btn.classList.remove('pointer-events-none');
    }, 200);
  }

  // Клик по кнопке
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (modal.classList.contains('hidden')) {
      openModal();
    } else {
      closeModal();
    }
  });

  // Клик вне модалки
  document.addEventListener('click', (e) => {
    if (!modal.classList.contains('hidden') && !modal.contains(e.target) && !btn.contains(e.target)) {
      closeModal();
    }
  });

  // Закрытие модалки по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  document.querySelector('.totop-btn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0 });
  });

  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  const mobileMenu = document.getElementById('mobileMenu');
  const anchorLinks = mobileMenu.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
});