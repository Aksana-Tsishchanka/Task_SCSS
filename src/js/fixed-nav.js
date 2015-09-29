/**
 * Created by Aksana_Tsishchanka on 9/29/2015.
 */
    var navElem =  document.getElementById('about-nav');
    var navElemSourceBottom = navElem.getBoundingClientRect().bottom + window.pageYOffset;

    console.log('navElemSourceBottom: ' + navElemSourceBottom);

    window.onscroll = function() {
        console.log('window.pageYOffset:' + window.pageYOffset);
        if (navElem.classList.contains('fixed-nav') && window.pageYOffset < navElemSourceBottom) {
            navElem.classList.remove('fixed-nav');
        } else if (window.pageYOffset > navElemSourceBottom) {
            navElem.classList.add('fixed-nav');
        }
    }
/*window.onscroll = function() {
 var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 document.getElementById('fixed-nav').innerHTML = scrolled + 'px';
 }*/