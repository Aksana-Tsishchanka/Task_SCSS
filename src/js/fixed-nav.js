/**
 * Created by Aksana_Tsishchanka on 9/29/2015.
 */

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


document.addEventListener('click', function(el) {
    el = el || window.event;

    var target = el.target || el.srcElement;
/*
    if (startWith('#', target.getAttribute('href')) && document.querySelector(target.getAttribute('href'))) {

        return scrollTo(target,30);

    }
    */

}, false);

function startWith(input, data) {
    return new RegExp('^' + input).test(data);
}


function scrollTo(element, duration) {

    var fromScroll = element.offsetTop;
    console.log('fromScroll ' + fromScroll);

    var toScroll = document.querySelector(element.getAttribute('href')).offsetTop;
    console.log('toScroll ' + toScroll);

    var distance = Math.abs(toScroll - fromScroll);
    console.log(distance);
    var step = distance / duration;

    setTimeout(function () {
        window.scrollBy(0, step);
    }, 10);

}