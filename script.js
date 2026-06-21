/* ======================= ЭЛЕМЕНТЫ ======================= */
const burger  = document.getElementById('burger');   // кнопка-гамбургер
const nav     = document.getElementById('nav');       // навигация
const overlay = document.getElementById('overlay');   // затемнение
const links   = document.querySelectorAll('.header__link'); // пункты меню

/* ======================= ОТКРЫТИЕ / ЗАКРЫТИЕ МЕНЮ ======================= */
function openMenu() {
  nav.classList.add('nav--open');
  burger.classList.add('burger--active');
  overlay.classList.add('overlay--active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  nav.classList.remove('nav--open');
  burger.classList.remove('burger--active');
  overlay.classList.remove('overlay--active');
  document.body.style.overflow = '';
}

/* Переключение по клику на бургер */
burger.addEventListener('click', () => {
  nav.classList.contains('nav--open') ? closeMenu() : openMenu();
});

/* Закрытие при клике на затемнение */
overlay.addEventListener('click', closeMenu);

/* Закрытие меню при клике на пункт (на мобильных) */
links.forEach(link => link.addEventListener('click', closeMenu));

/* ======================= ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ ======================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#' || targetId.length <= 1) return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();

      // Учитываем высоту фиксированной шапки (78px)
      const headerH = document.getElementById('header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ======================= ЗАКРЫТИЕ МЕНЮ ПРИ РЕСАЙЗЕ ======================= */
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});