$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.banner').height()) {
			$('.header').addClass('solid');
		} else {
			$('.header').removeClass('solid');
		}
	});
});
document.body.addEventListener(
	'click',
	function (e) {
		if (e.target.parentNode.id === 'sidenav') {
			document.querySelector('.mobile-nav').style.width = '200px';
			e.preventDefault();
			return;
		}
		document.querySelector('.mobile-nav').style.width = 0;
	},
	true
);
function openNav() {
	document.querySelector('.mobile-nav').style.width = '200px';
}

function closeNav() {
	document.querySelector('.mobile-nav').style.width = '0';
}
