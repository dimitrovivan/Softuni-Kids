const burgerMenu = document.querySelector('.burger-menu-wrapper');
const navigationList = document.querySelector('.top-navigation__list');

burgerMenu.addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu() {
 
    if(burgerMenu.classList.contains('open')) {
        burgerMenu.classList.remove('open');
        navigationList.classList.remove('appear');

    } else {
        burgerMenu.classList.add('open');
        navigationList.classList.add('appear');
    }

}