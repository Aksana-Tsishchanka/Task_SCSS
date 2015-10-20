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

function startWith(input, data) {
    return new RegExp('^' + input).test(data);
}

document.addEventListener('click', function(event) {
    //debugger;
    event = event || window.event;

    var elFrom = event.target || event.srcElement;

    if (startWith('#', elFrom.getAttribute('href')) && document.querySelector(elFrom.getAttribute('href'))) {

        event.preventDefault();

        var elTo = document.querySelector(elFrom.getAttribute('href'));

      // scroll(elFrom, elTo, 100);
    }

}, false);


function scroll(elementFrom, elTo, duration) {

    console.log("fromY "+ document.body.scrollTop);
   // console.log("elementTo "+ to );
    console.log('toY ' + elTo.offsetTop);

    fromY = document.body.scrollTop;
    toY = elTo.offsetTop;

    var distance = Math.abs(fromY - toY);
    console.log('distance ' + distance);

    var perStep = distance / duration;
    console.log('perStep '+ perStep);


    while (perStep < distance) {
        perStep = perStep + perStep;
        console.log('perStepCurrent ' + perStep);
        if (elementFrom > elTo) {
            window.scrollBy(0, -perStep);
        }
        else {
            window.scrollBy(0, perStep);
        }
    }
}