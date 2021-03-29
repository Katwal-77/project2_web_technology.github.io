const hamburger = document.querySelector('.fas');
const main_menu = document.querySelector('.menu__links');

hamburger.addEventListener('click', () => {
    console.log(hamburger);
    console.log(main_menu);
    main_menu.classList.toggle('toggle')
})