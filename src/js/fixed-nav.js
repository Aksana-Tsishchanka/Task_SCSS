/**
 * Created by Aksana_Tsishchanka on 9/29/2015.
 */
//var nav =  document.querySelector(".nav");
//var navOuter = document.querySelector(".about-nav");
//var nav = document.querySelector('.nav');

var navOuter = document.querySelector('#about');
var nav =  document.querySelector(".about-nav");

addEventListener('scroll', function() {
    var bodyHeightScroll = document.body.scrollTop;
    console.log('windowScroll', bodyHeightScroll);

    if (nav.classList.contains('fixed-nav') && bodyHeightScroll < navOuter.offsetTop) {
        nav.classList.remove('fixed-nav');
    }
    else
        if (!nav.classList.contains('fixed-nav') && bodyHeightScroll > navOuter.offsetTop) {
            nav.classList.add('fixed-nav');
        }
});
