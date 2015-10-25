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
        var toY = elTo.getBoundingClientRect().top;
        //scrollChecking(fromY,toY, 100);
        scroll(toY, 100);
    }

}, false);


/**
 * @param to {number} - position of the destination relative to current viewport position
 * @param interspace {number} - number of segments, that split animation; 
 */
function scroll(to, interspaces) {
    var currentY = 0;   //relative Y to current viewport position
    var currentScrollPosition = document.body.scrollTop;   
    var step = to / interspaces;
    
    requestAnimationFrame(function animate() {
        currentY += step;
        currentScrollPosition += step
        document.body.scrollTop = currentScrollPosition;

        if (Math.abs(to - currentY) > 1) {
            requestAnimationFrame(animate);
        }
    });
}



function scrollChecking(fromY, toY, interspace) {
    var distance = toY - fromY;
    var step = distance / interspace;

    while (Math.abs(toY - document.body.scrollTop) >= 1) {
        document.body.scrollTop += step;
    }
}
