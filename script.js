document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      // Навешиваем или убираем класс открытия меню
      nav.classList.toggle('nav--open');
    });

    // Автоматически закрываем меню при клике на любой пункт
    const navLinks = nav.querySelectorAll('.header__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
      });
    });
  }
});