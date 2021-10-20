var handler = function (event) {
    var height = document.getElementsByTagName('header')[0].offsetHeight;
    document.getElementsByTagName('main')[0].style.marginTop = `${height}px`;
}

window.addEventListener('DOMContentLoaded', handler, true);
window.addEventListener('resize', handler, true);