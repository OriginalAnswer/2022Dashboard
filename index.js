const nav = document.getElementById('menu-nav');
const open = document.getElementById('menu-open');
const close = document.getElementById('menu-close');
const mode = document.querySelector('.mode');

open.addEventListener('click', () => {
    nav.style.left = '0';
})
close.addEventListener('click', () => {
    nav.style.left = '-400px';
})

const today = document.querySelector('.today');
const date = new Date();
const d = String(date.getDate());
const m = date.getMonth();
const y = String(date.getFullYear());
const dy = String(date.getDay());
today.innerText = `${d} / ${m} / ${y}`;

// ---------------------------------------------
function darkmode(){
    const b = document.body;
    b.classList.toggle('darkmode')
}