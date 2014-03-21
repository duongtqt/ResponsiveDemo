/* RETINA READY IMG SRC */
function getImgSrc(img, src) {
    var srcResult = src;
    // if high-res screen then change _x1 on _x2
    if (window.devicePixelRatio > 1 &&
        src.indexOf("_x1.")>=0) {
          srcResult = src.replace("_x1.", "_x2.");
    }
    img.onload = null; //protect from second rasing
    img.src = srcResult; 

}
 
$(document).ready(function(){
  // fire onload trigger on IMG tags that have non empty SRC attribute
  var images = $('img:not([src=""])');
    images.each(function(i) {
        $(this).trigger('onload');           
    });
});