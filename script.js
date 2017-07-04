document.addEventListener('DOMContentLoaded', () => {
    
    
    

    
    // Откритие/закрытие меню разделов сайта
    var element = document.getElementById('fmenu');
    var trigger = document.getElementById('spinner-form2');
    var headBorder = document.getElementById('fadeborder');
    trigger.addEventListener('click', () => {
        element.classList.toggle('full-menu-opend'),
            headBorder.classList.toggle('head-border');
    });

     // Выпадающее меню в меню разделов сайта 
    var dropdown = document.querySelectorAll('.dropdown');
    var dropdownArray = Array.prototype.slice.call(dropdown, 0);
    dropdownArray.forEach(function (el) {
        var button = el.querySelector('a[data-toggle="dropdown"]'),
            dropdown = document.querySelectorAll('.dropdown'),
            menu = el.querySelector('.dropdown-menu'),
            arrow = button.querySelector('div.icon-arrow'),
            adrop = el.querySelector('.adrop');
        button.onclick = function (event) {
            if (!menu.hasClass('show')) {
                menu.classList.add('show');
                menu.classList.remove('hide');
                el.classList.add('active');

                arrow.classList.add('opend');
                arrow.classList.remove('closed');
                event.preventDefault();
            } else {
                menu.classList.remove('show');
                menu.classList.add('hide');
                el.classList.remove('active');

                arrow.classList.remove('opend');
                arrow.classList.add('closed');
                event.preventDefault();
            }
        };
    })
    Element.prototype.hasClass = function (className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    };
    
    //Активация поиска 
    var topSearch = document.getElementById('top-search-f');
    var searchOfside = document.getElementById('ofside-search');
    var searchResultes = document.getElementById('search-resultes');
    topSearch.addEventListener('click', () => {
        searchOfside.classList.add("active-search");
        topSearch.classList.add("active-search-cover");
        searchResultes.classList.add("active-search-resultes");
    });
    searchOfside.addEventListener('click', () => {
        searchOfside.classList.remove("active-search");
        topSearch.classList.remove("active-search-cover");
        searchResultes.classList.remove("active-search-resultes");
    });
    
    //Активация мобильного поиска
    var mobileSearch = document.getElementById('mobile-search');
    var tmSearch = document.getElementsByClassName('tmsearch');
    var mobileSearchclose = document.getElementById('mobile-tcs');
    var inputActive = document.getElementById('input-search');
    var mtopSearch = document.getElementById('m-top-search-f');
    var msearchResultes = document.getElementById('m-search-resultes');
    mobileSearch.addEventListener('click', () => {
        topSearch.classList.remove("hidden-sm-down");
        topSearch.classList.add("mobile-search-cover");
        searchResultes.classList.add("mobile-search-resultes");
        mobileSearchclose.classList.add("mtsc");
        inputActive.focus();
    });
    mobileSearchclose.addEventListener('click', () => {;
        topSearch.classList.remove("mobile-search-cover");
        topSearch.classList.add("hidden-sm-down");
        searchResultes.classList.remove("mobile-search-resultes");
        mobileSearchclose.classList.remove("mtsc");
        searchOfside.classList.remove("active-search");
        inputActive.blur;
    });


    // открытие бокового меню 
    var avatar = document.getElementById('p-m-o');
    var goLogin = document.getElementById('go-login');
    var personalMenu = document.getElementById('personal-menu');
    var pMenu = document.getElementById('p-menu');
    var pClose = document.getElementById('p-close');
    avatar.addEventListener('click', () => {
        personalMenu.classList.add('opend');
    });
    goLogin.addEventListener('click', () => {
        personalMenu.classList.add('opend');
    });
    
    
    // кнопка закрытия бокового меню 
    pClose.addEventListener('click', () => {
        personalMenu.classList.remove('opend');
    });
    
    var enterTo = document.getElementById("enter-to");
    var pHeadUser = document.querySelector(".user-info-min");
    var pHeading = document.querySelector(".pheding");
    var loginInputs = document.querySelector(".login");
    var loginCont = document.querySelector(".login-cont");
    var raspCont = document.querySelector(".rasp-cont");
    var pPagebtn = document.querySelector("#personalpage");
    var avatarPrew  = document.querySelector(".avatar");
    
    enterTo.addEventListener('click', () => {
        pHeadUser.classList.add('active');
        pHeading.classList.remove('active');
        loginCont.classList.remove('active');
        raspCont.classList.add('active');
        goLogin.classList.add('inactive');
        pPagebtn.classList.remove('inactive');
        avatarPrew.classList.add('active');  
    });
    
    var regBtn  = document.querySelector("#registration");
    var regCont  = document.querySelector(".registration");
    
    regBtn.addEventListener('click', () => {
        loginInputs.classList.remove('active');
        regCont.classList.add('active');
    });
    
    var backToEnter  = document.querySelector("#back-to-enter");
    var backToEnter2  = document.querySelector("#back-to-enter2");
    var congratulationsReg = document.querySelector(".congratulations");
    var afterReg = document.querySelector("#next-reg-step");

    
    backToEnter.addEventListener('click', () => {
        loginInputs.classList.add('active');
        regCont.classList.remove('active');
    });
     backToEnter2.addEventListener('click', () => {
        loginInputs.classList.add('active');
        congratulationsReg.classList.remove('active');
    });
    
    afterReg.addEventListener('click', () => {
        congratulationsReg.classList.add('active');
        regCont.classList.remove('active');
    });
    
    var exitBtn = document.querySelector(".exit-btn");
    
    exitBtn.addEventListener('click', () => {
        pHeadUser.classList.remove('active');
        pHeading.classList.add('active');
        loginCont.classList.add('active');
        raspCont.classList.remove('active');
        goLogin.classList.remove('inactive');
        pPagebtn.classList.add('inactive');
        avatarPrew.classList.remove('active');  
    });
    
    
    
    
    
    // Табы новостей 
    var tab_btn = document.querySelector("#tab-btn");
    tab_btn.addEventListener("click", function (e) {
        var btn = tab_btn.children;
        var page = document.querySelector("#tab-page").children;

        if (e.target.tagName === "SPAN") {
            for (var i = 0, len = btn.length; i < len; i++) {
                btn[i].index = i;
                btn[i].className = "";
                page[i].className = "";
            }
            e.target.className = "active-tab";
            page[e.target.index].className = "active";
        }
    }, false);
    
    
    
     var favorBtn = document.querySelector(".favorBtn");
     var favorContext = document.querySelector(".context-menu");
    
    favorBtn.addEventListener('click', () => {
        favorContext.classList.toggle('active');
    });
    
    var dateSelector = document.querySelector(".table-date");
    var dateCover = document.querySelector(".date.cover");
    
    dateSelector.addEventListener('click', () => {
        dateCover.classList.toggle('select');
    });
    
    
        
    
    
   
    
    
    
    
    
    
    
    
});