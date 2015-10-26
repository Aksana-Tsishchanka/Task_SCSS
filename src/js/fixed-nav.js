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
    event = event || window.event;
    var elFrom = event.target || event.srcElement;

    if (startWith('#', elFrom.getAttribute('href')) && document.querySelector(elFrom.getAttribute('href'))) {
        event.preventDefault(); //remove default action of brawser
        var elTo = document.querySelector(elFrom.getAttribute('href'));
        var toY = elTo.getBoundingClientRect().top; //distance between the left top corner of viewport
        scroll(toY, 100);
    }

}, false);


/**
 * Animate scrolling: the initial position (from)- it is the left top corner of viewport, not document.body.scrollTop;
 * @param offset {number} - offset, difference between initial and final position;
 * @param interspace {number} - number of segments, that split animation; the frequency of the call animation;
 */
function scroll(offset, interspaces) {
    var currentY = 0;   //relative Y to current viewport position
    var currentScrollPosition = document.body.scrollTop;   
    var step = offset / interspaces;
    
    requestAnimationFrame(function animate() {
        currentY += step;
        currentScrollPosition += step
        //debugger;
        document.body.scrollTop = currentScrollPosition;

        if (Math.abs(offset - currentY) > 1) {
            requestAnimationFrame(animate);
        }
    });
}

