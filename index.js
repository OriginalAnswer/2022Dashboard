const nav = document.getElementById('menu-nav');
const open = document.getElementById('menu-open');
const close = document.getElementById('menu-close');

open.addEventListener('click', () => {
    document.getElementById('menu-nav').style.left = '0';
})
close.addEventListener('click', () => {
    document.getElementById('menu-nav').style.left = '-60%';
})