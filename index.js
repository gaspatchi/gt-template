require("./res/sass/main.scss");
// alert('Hola') function showAavtar() {$(".btn-40").css('display',' none');$(".avatar").css('display','block');}



function showFmenu() {
    $(".full-menu").toggleClass('full-menu-opend');
    $(".gt-header").toggleClass('head-border');
};

document.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById('fmenu');
    var trigger = document.getElementById('spinner-form2');
    var headBorder = document.getElementById('fadeborder');
    trigger.addEventListener('click', () => {
        element.classList.toggle('full-menu-opend'),
        headBorder.classList.toggle('head-border');
    });

    var topSearch = document.getElementById('top-search-f');
    var searchOfside = document.getElementById('ofside-search');
    var searchResultes = document.getElementById('search-resultes');

    topSearch.addEventListener('click', () => {
        searchOfside.classList.add("active-search")
        topSearch.classList.add("active-search-cover")
        searchResultes.classList.add("active-search-resultes");
    });

    searchOfside.addEventListener('click', () => {
        searchOfside.classList.remove("active-search")
        topSearch.classList.remove("active-search-cover");
         searchResultes.classList.remove("active-search-resultes");
    });

});
