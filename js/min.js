


// ---------------- Поиск -----------------
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
// ----------------------------------------




// ---------------------- Меню -----------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// ---------------------------------------------------




// ------------ icon tel -----------------
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
// ---------------------------------------



// --------------- Подписка --------------
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// ---------------------------------------



// ------------------- Слайдер ---------------------
document.getElementById('sliderleft').onclick = sliderleft;
var left = 0;

function sliderleft(){
	var polosa = document.getElementById('polosa');
	left = left - 360;
	if(left < -720){
		left = 0;
	}
	polosa.style.left = left +'px';
}

// ----- Второй слайдер ---------------------------
document.getElementById('sliderleftt').onclick = sliderleftt;
var left = 0;

function sliderleftt(){
	var polosa2 = document.getElementById('polosa2');
	left = left - 360;
	if(left < -720){
		left = 0;
	}
	polosa2.style.left = left +'px';
}
// --------------------------------------------



// -------------- Вкладки ----------------
window.onload = function(){
	document.querySelector('.tabs-header').addEventListener('click', fTabs);

	function fTabs(event){
		// console.log('event');
		if(event.target.className == 'tab-h'){
			var dataTab = event.target.getAttribute('data-tab');

			var tabH = document.getElementsByClassName('tab-h');
			for(var i=0; i<tabH.length; i++){
				tabH[i].classList.remove('activ');
			}
			
			event.target.classList.add('activ');
			var tabBody = document.getElementsByClassName('tab-b');
			for(var i=0; i < tabBody.length; i++){
				if(dataTab == i){
					tabBody[i].style.display = 'block';
				}
				else{
					tabBody[i].style.display = 'none';
				}
			}
		}
	}
}
// --------------------------------------




// ------------ скрол в низ ---------------
$(function() {
  $('#demo').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
// ----------------------------------------



// ---------- карзина -------------------

// $('document').ready(function(){
// 	loadGoods();
// });

// function loadGoods(){
// 	// загружаю товары на страницу
// 	$getJSON('goods.json', function(data){
// 		console.log('data');
// 	});
// }
