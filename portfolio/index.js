const btnClose = document.querySelector('.menu-burger_close-btn');
const burgerMenu = document.querySelector('.menu-burger');
const burgerIco = document.querySelector('.burger-ico');
const burgerLink = document.querySelectorAll('.buger-link');
function closeMenu(){
   burgerMenu.classList.remove('open');
}
btnClose.onclick = () => {
   closeMenu();
};
burgerIco.onclick = () => {
   burgerMenu.classList.add('open');
};
burgerLink.forEach(el => {
   el.onclick = () => {
     closeMenu();
   };
});
