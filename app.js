/*this javascript is so hamburger lines actually animate*/
const menu = document.querySelector('#mobile-menu') /*first referenced MobileMenu div*/
const menuLinks = document.querySelector('.navbar__menu') /*referenced the navbar menu in practice.html*/

/*triggers everything in the menu of hamburgerlines*/ 
menu.addEventListener('click', function () { /*once you click a function will run*/
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})