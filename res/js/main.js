alert('Hola');

function showAavtar() {
    $(".btn-40").css('display',' none');
    $(".avatar").css('display','block');
}

//<!--  -->function showFmenu(){
       $(".full-menu").toggleClass('full-menu-opend');
       $(".gt-header").toggleClass('head-border');
 };


HTML.addEventListener('DOMContentLoaded', () => {
	var element = document.getElementById('toggle');
	var trigger = document.getElementById('trigger');

	trigger.addEventListener('click', () => {
		element.classList.toggle('is-active');
	});
});