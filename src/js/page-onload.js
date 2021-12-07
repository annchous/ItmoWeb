window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    var footer = document.getElementsByClassName('footer-bar')[0];
    footer.innerHTML += '<p class="footer-bar">Page load time is ' + loadTime + ' ms</p>';

    var url = window.location.href;
    console.log("URL: " + url)

    $(".menu-list a").each(function() {
        console.log(this.href);
        if (url == this.href) {
            $(this).addClass('menu-list-active');
        }
    });
}