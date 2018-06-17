//TIME AGO

jQuery(document).ready(function($) {$('abbr.timeago').timeago();});


//SCROLL FIXED

$(window).bind('scroll',function(){

if ($(window).scrollTop()>143){$('.inner-menu').addClass('fixed-inner-menu')}

else{$('.inner-menu').removeClass('fixed-inner-menu')}

if ($(window).scrollTop()>120){$('.navbar').addClass('fixed-navbar')}

else{$('.navbar').removeClass('fixed-navbar')}

if ($(window).scrollTop()>590){$('.ds').addClass('fixed-ds')}

else{$('.ds').removeClass('fixed-ds')}

if ($(window).scrollTop()>770){$('.tg').addClass('fixed-tg');$('.navbar ul li').removeClass('fixed-ds')}

else{$('.tg').removeClass('fixed-tg')}

if ($(window).scrollTop()>940){$('.st').addClass('fixed-st');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg')}

else{$('.st').removeClass('fixed-st')}

if ($(window).scrollTop()>1100){$('.tt').addClass('fixed-tt');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st')}

else{$('.tt').removeClass('fixed-tt')}

if ($(window).scrollTop()>1300){$('.gt').addClass('fixed-gt');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt')}

else{$('.gt').removeClass('fixed-gt')}

if ($(window).scrollTop()>1600){$('.an').addClass('fixed-an');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt')}

else{$('.an').removeClass('fixed-an')}

if ($(window).scrollTop()>1780){$('.da').addClass('fixed-da');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an')}

else{$('.da').removeClass('fixed-da')}

if ($(window).scrollTop()>1960){$('.d').addClass('fixed-d');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an').removeClass('fixed-da')}

else{$('.d').removeClass('fixed-d')}

if ($(window).scrollTop()>2370){$('.cns').addClass('fixed-cns');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an').removeClass('fixed-da').removeClass('fixed-d')}

else{$('.cns').removeClass('fixed-cns')}

if ($(window).scrollTop()>2560){$('.xe360').addClass('fixed-xe360');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an').removeClass('fixed-da').removeClass('fixed-d').removeClass('fixed-cns')}

else{$('.xe360').removeClass('fixed-xe360')}

if ($(window).scrollTop()>2730){$('.pcs').addClass('fixed-pcs');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an').removeClass('fixed-da').removeClass('fixed-d').removeClass('fixed-cns').removeClass('fixed-xe360')}

else{$('.pcs').removeClass('fixed-pcs')}

if ($(window).scrollTop()>3530){$('.dv').addClass('fixed-dv');$('.navbar ul li').removeClass('fixed-ds').removeClass('fixed-tg').removeClass('fixed-st').removeClass('fixed-st').removeClass('fixed-tt').removeClass('fixed-gt').removeClass('fixed-an').removeClass('fixed-da').removeClass('fixed-d').removeClass('fixed-cns').removeClass('fixed-xe360').removeClass('fixed-pcs')}

else{$('.dv').removeClass('fixed-dv')}

if ($(window).scrollTop()>600){$('.clip-iframe iframe').addClass('fixed-iframe')}

else{$('.clip-iframe iframe').removeClass('fixed-iframe')}

});

//SLIDE BOX

$(window).load(function(){$('.tinanh-inner').flexslider({animation:"slide",pauseOnAction:false,slideshowSpeed:4000,animationSpeed:300})})

</script>

<script type='text/javascript'>//<![CDATA[

function mischandler(){return false;}

function mousehandler(e){var myevent = (isNS) ? e : event;var eventbutton = (isNS) ? myevent.which : myevent.button;if((eventbutton==2)||(eventbutton==3)) return false;}

document.oncontextmenu = mischandler;document.onmousedown = mousehandler;document.onmouseup = mousehandler;var isCtrl = false;

document.onkeyup=function(e){if(e.which == 17)isCtrl=false;}

document.onkeydown=function(e){if(e.which == 17)isCtrl=true;if((e.which == 85) || (e.which == 67) && isCtrl == true){return false;}}
