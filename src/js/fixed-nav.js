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

        //var fromY = event.target.getBoundingClientRect().top;
        var fromY = event.offsetY;
        //var fromY = document.body.scrollTop;
        console.log('fromY ' + fromY);

        var elTo = document.querySelector(elFrom.getAttribute('href'));
        var toY = elTo.getBoundingClientRect().top;
        console.log('toY ' + toY);

        //elTo.offsetTop;
        scroll(fromY,toY, 30)
    }

}, false);


function scroll(from, to, time) {
    var currentY = from;
    var step = (to - from) / time;
    console.log('distance ' + Math.abs(to -from));
    console.log('step ' + step);
    requestAnimationFrame(function animate() {
        currentY += step;
        document.body.scrollTop += step;
        if (Math.abs(to - currentY) > 1) {
            requestAnimationFrame(animate);
        }
    });
}



function scroll1(fromY, toY, interspace) {
    // Do whatever
    //console.log("fromY "+ document.body.scrollTop);
    //fromY = document.body.scrollTop;
    //toY = elTo.offsetTop;
    //debugger;
    var distance = toY - fromY;
    console.log('distance ' + distance);
    var step = distance / interspace;
    console.log('perStep '+ step);

    var numberCall = 1;
    //document.body.scrollTop += perStep;
    //var currentY = fromY;

    //currentY += step;
    for (var i=0; i < interspace; i++ ) {
        
        document.body.scrollTop += step;
        console.log('numberCall ' + numberCall++);
    }
}
