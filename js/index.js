const menu = document.getElementById('menu-bar');
const menuMobile = document.getElementById('container-mobile');
const icone = document.getElementById('icone')
const btnTopo = document.getElementById('backToTop');

function handleClick() {
    icone.classList.toggle('fa-x')

    if (icone.classList.contains('fa-x')) {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
}

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 700) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});