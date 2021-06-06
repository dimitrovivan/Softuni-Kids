const burgerMenu = document.querySelector('.burger-menu-wrapper');
const body = document.querySelector('body');
const navigationList = document.querySelector('.top-navigation__list');

burgerMenu.addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu() {
 
    if(burgerMenu.classList.contains('open')) {
        burgerMenu.classList.remove('open');
        navigationList.classList.remove('appear');
        body.style.overflowY = "scroll";

    } else {
        burgerMenu.classList.add('open');
        navigationList.classList.add('appear');
        body.style.overflowY = "hidden";
    }

}