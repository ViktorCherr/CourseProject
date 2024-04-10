const menu = document.querySelector('.menu-header');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-close');
    menu.classList.toggle('menu-header-open');
    document.querySelector('body').classList.toggle('no-scroll');
})

document.querySelectorAll('.menu-header a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu-close');
        menu.classList.toggle('menu-header-open');
    })
})