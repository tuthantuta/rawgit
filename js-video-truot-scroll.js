//TIME AGO

jQuery(document).ready(function($) {$('abbr.timeago').timeago();});

//UPDATE COMMENT

var cm_config = {max_result:1,summary:9999,new_tab_link:false,ct_id:'newest-cm',new_cm:'',interval:10000,alert:false,};

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

//SCROLL TOP

$(function(){$(window).scroll(function(){if($(this).scrollTop()!=0){$('.btnTop').fadeIn();}else{$('.btnTop').fadeOut();}});$('.btnTop').click(function(){$('body,html').animate({scrollTop:0},1000);})});

// OTHER ELEMENTS AND FANCYBOX //

function h1(){document.getElementById('click-to-close').style.display='none'}

function h2(){document.getElementById('click-to-show').style.display='none'}

function h3(){document.getElementById('hide-l-item').style.display='none'}

function h4(){document.getElementById('hide-l-newest').style.display='none'}

$(document).ready(function(){

//CLICK TO SHOW BOXES

$(".fb-box i").click(function(){

var toggleId = "#" + this.id.replace(/^link/,"ul");

$(".fb-box dd ol").not(toggleId).hide();

$(toggleId).toggle();

if($(toggleId).css("display") == "none"){

$(this).removeClass("selected_i");

}else{

$(this).addClass("selected_i"); 

}

});

$(".fb-box dd ol i").click(function() {

var text = $(this).html();

$(".fb-box dd ol").hide();

});

$(document).bind('click', function(e) {

var $clicked = $(e.target);

if (! $clicked.parents().hasClass("fb-box")){

$(".fb-box dd ol").hide();

$(".fb-box i").removeClass("selected_i");

}

});//end fb-box

//CHANGE FONT

$('#normalText').click(function(event){

event.preventDefault();

$('#title').css({'font':'bold 2em Arial,Helvetica,sans-serif','letter-spacing':'-1px'});

$('#clip-title').css({'font':'bold 2em Arial,Helvetica,sans-serif','letter-spacing':'-1px'}); 

});

$('#NoticiaText').click(function(event){

event.preventDefault();

$('#title').css({'font':'bold 2em Open Sans Condensed,Arial,Helvetica,sans-serif','letter-spacing':'0'});

$('#clip-title').css({'font':'bold 2em Open Sans Condensed,Arial,Helvetica,sans-serif','letter-spacing':'0'});

});

$('#font a').click(function() {

$('#font a').removeClass('selected');

$(this).addClass('selected');

});

//ATTRIBUTE ID

$('.call-newest-cm').attr('id','newest-cm');

$('.hvideo span').attr('id','click-to-show');

$('.hvideo span').click(function(){return h2()});

$('.option_s1').click(function(){$('.hfeed').attr('id','hide-l-item')});

$('.option_s1').click(function(){$('.blog-pager-older-link').attr('id','hide-l-item')});

$('.option_s1').click(function(){$('#fixed-search-result').attr('id','search-result')});

$('.option_s2').click(function(){$('#search-result').attr('id','fixed-search-result')});

//ATTRIBUTE CLASS

$('#content table tbody tr td a').addClass('fancybox-button');

$('#content table tbody tr td a').attr('rel','fancybox-button');

$('.separator a').addClass('fancybox-button');

$('.separator a').attr('rel','fancybox-button');

//FANCYBOX BUTTONS

$('.fancybox-button').fancybox({

prevEffect:'elastic',

nextEffect:'elastic',

closeBtn:false,

helpers:{

title:{type:'inside'},

buttons: {}

}

});

});

//SLIDE BOX

$(window).load(function(){$('.tinanh-inner').flexslider({animation:"slide",pauseOnAction:false,slideshowSpeed:4000,animationSpeed:300})})
