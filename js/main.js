let menuToggle = document.querySelector('#menu-toggle');
let headNavClose = document.querySelector('.head-nav-close');
let headNav = document.querySelector('.head-nav');
let headMenuLinks = document.querySelectorAll('.head-menu-link');
let headMenu = document.querySelector('.head-menu');
let headMenuList

menuToggle.addEventListener('click', function(event) {

    event.preventDefault();

    headNav.classList.toggle('visible');

})

headNavClose.addEventListener('click', function(event) {

    event.preventDefault();

    headNav.classList.toggle('visible');

})

for (let i = 0; i < headMenuLinks.length; i++) {
    headMenuLinks[i].addEventListener('click', function(event) {
        for (let i = 0; i < headMenuLinks.length; i++) {
            headMenuLinks[i].classList.remove('active');
        }
        event.target.classList.add('active');
        headNav.classList.toggle('visible');

    })
}