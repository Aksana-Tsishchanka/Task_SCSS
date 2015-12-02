/**
 * Created by Aksana_Tolstoguzova on 11/16/2015.
 */
var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;

alert("Total width/height: " + screen.width + "*" + screen.height + '\n' + "Actual resolution: " + w + "*" + h );
