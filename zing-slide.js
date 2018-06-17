function znSlideShowV2(options) {
    this.options = options;
    this.init();
}

znSlideShowV2.prototype = {
    init: function() {
        this.index = (this.options.index || 1) - 1;
        this.fadeInSpeed = this.options.fadeInSpeed || 50;
		
        this.container = document.getElementById(this.options.containerId);
        if (this.container == null) {
            return;
        }
		
        var that = this;
        document.getElementById(this.options.nextId).onclick = function(){
            that.pressNext();
        };
        document.getElementById(this.options.prevId).onclick = function(){
            that.pressPrev();
        }
		
        var childNodes = this.container.childNodes;
        var len = childNodes.length;
        var slides = [];
		
        for (var i = 0; i < len; i++) {
            var child = childNodes[i];
            if (child.nodeType != 1 || child.nodeName.toLowerCase() != "div") {
                continue;
            }
			
            slides[slides.length] = child;
        }
		
        this.slides = slides;
        this.totalSlides = slides.length;
    },
	
    start: function() {
        if (this.totalSlides > 1) {
            this.slide();
        }
    },
	
    slide: function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
		
        if (this.elmFadeEffect) {
            this.elmFadeEffect.stop();
        } else {
            this.elmFadeEffect = this.fadeEffect();
        }
		
        var slide = this.slides[this.index];
        if (!slide) {
            return;
        }
		
        this.hideAllSlides();
		
        slide.style.display = "block";
		
        this.elmFadeEffect.init(slide, 1);
		
        var that = this;
        this.timeout = setTimeout(function(){
            that.increaseIndex();
            that.slide();
        }, this.options.delay);
    },
	
    increaseIndex: function() {
        if (++this.index >= this.totalSlides) {
            this.index = 0;
        }
    },
	
    decreaseIndex: function() {
        if (--this.index < 0) {
            this.index = this.totalSlides - 1;
        }
    },
	
    pressNext: function() {
        this.increaseIndex();
        this.slide();
    },
	
    pressPrev: function() {
        this.decreaseIndex();
        this.slide();
    },
	
    hideAllSlides: function() {
        var child;
        for (var i = 0; i < this.totalSlides; i++) {
            child = this.slides[i];
            child.style.display = "none";
            child.style.opacity = 0;
            child.style.filter = 'alpha(opacity=0)';
        }
    },
	
    fadeEffect: function() {
        var fadeInSpeed = this.options.fadeInSpeed;
        return {
            init: function(elem, flag, target) {
                this.elem = elem;
                clearInterval(this.elem.si);
                this.target = target ? target : flag ? 100 : 0;
                this.flag = flag || -1;
                this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
                var that = this;
                this.si = setInterval(function(){
                    that.tween()
                }, fadeInSpeed);
            },
			
            tween: function() {
                if(this.alpha >= this.target) {
                    clearInterval(this.si);
                    return;
                }
                var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
                this.elem.style.opacity = value / 100;
                this.elem.style.filter = 'alpha(opacity=' + value + ')';
                this.alpha = value
            },
			
            stop: function() {
                if (this.si) {
                    clearInterval(this.si);
                }
				
                if (this.elem) {
                    this.elem.style.opacity = 0;
                    this.elem.style.filter = 'alpha(opacity=0)';
                    this.alpha = 0;
                }
            }
        }
    }
};

var znSlideshow = {
    animateFadeIn : function (elementShow, element) {
        element.opacityFlag += 0.025;
        zm(element).opacity(element.opacityFlag);
        if(element.opacityFlag < 1) {
            elementShow.timeOutFadeIn = setTimeout(function(){
                znSlideshow.animateFadeIn(elementShow, element);
            }, 20);
        } else {
            element.opacityFlag = 1;
        }
    },
            
    animateFadeOut : function (elementShow, element) {
        element.opacityFlag -= 0.05;
        zm(element).opacity(element.opacityFlag);
        if(element.opacityFlag > 0) {
            elementShow.timeOutFadeOut = setTimeout(function(){
                znSlideshow.animateFadeOut(elementShow, element);
            }, 20);
        }
    },

    slideshow : function (elementShow, lengthShow, indexShow) {
        elementShow.indexShow = indexShow;
        var element = elementShow.elementItem[indexShow];
        if(element == null) {
            return;
        }
        zm(element).opacity(0);
        zm(element).show();
        znSlideshow.animateFadeIn(elementShow, element);
        elementShow.timeOutFade = setTimeout(function(){
            znSlideshow.animateFadeOut(elementShow, element);
        }, elementShow.timeShow+1200);
        elementShow.timeOutOpacity = setTimeout(function(){
            element.opacityFlag = 0;
            zm(element).opacity(0);
            zm(element).hide();
        }, elementShow.timeShow+1202);
        if(indexShow < lengthShow) {
            indexShow += 1;
        } else {
            indexShow = 1;
        }
        elementShow.timeOutShow = setTimeout(function(){
            znSlideshow.slideshow(elementShow, lengthShow, indexShow);
        }, elementShow.timeShow + 1205);
    },
	    
    startshow : function (divShow, indexShow, timeShow) {
        var elementShow = document.getElementById(divShow);
        if(elementShow == null) {
            return;
        }
        var listDiv = elementShow.childNodes;
        var lengthTg = listDiv.length;
        var lengthShow = 0;
        var arrayElement = new Array(3);
        
        for(var i=0;i<lengthTg;i++) {
            if(listDiv.item(i).tagName == 'DIV') {
                lengthShow ++;
                var divFade = divShow + '_' + lengthShow;
                var element = document.getElementById(divFade);
                if(element != null) {
                    element.opacityFlag = 0;
                    zm(element).hide();
                    zm(element).opacity(0);
                    arrayElement[lengthShow] = element;
                }
            }
        }
        elementShow.elementItem = arrayElement;
        elementShow.lengthShow = lengthShow;
        elementShow.timeShow = timeShow;
        if(lengthShow == 0) {
            return;
        }
        znSlideshow.slideshow(elementShow, lengthShow, indexShow);	
    },
            
    clickNext : function (divShow) {
        var elementShow = document.getElementById(divShow);
        if(elementShow == null) {
            return;
        }
        var lengthShow = elementShow.lengthShow;
        clearTimeout(elementShow.timeOutShow);
        clearTimeout(elementShow.timeOutFade);
        clearTimeout(elementShow.timeOutFadeIn);
        clearTimeout(elementShow.timeOutFadeOut);
        clearTimeout(elementShow.timeOutOpacity);
        var indexShow = 1;
        if(elementShow.indexShow < lengthShow) {
            indexShow = elementShow.indexShow + 1;
        }
        znSlideshow.startshow(divShow, indexShow, elementShow.timeShow);
    },

    clickPrev : function (divShow) {
        var elementShow = document.getElementById(divShow);
        if(elementShow == null) {
            return;
        }
        var lengthShow = elementShow.lengthShow;
        clearTimeout(elementShow.timeOutShow);
        clearTimeout(elementShow.timeOutFade);
        clearTimeout(elementShow.timeOutFadeIn);
        clearTimeout(elementShow.timeOutFadeOut);
        clearTimeout(elementShow.timeOutOpacity);
        var indexShow = lengthShow;
        if(elementShow.indexShow > 1) {
            indexShow = elementShow.indexShow - 1;
        }
        znSlideshow.startshow(divShow, indexShow, elementShow.timeShow);
    }
}

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
    googletag.defineSlot('/35085906/Zing.News_Article_bottom', [468, 60], 'div-gpt-ad-1350464014553-0').addService(googletag.pubads());
    googletag.defineSlot('/35085906/Zing.News_Article_bottom2', [468, 60], 'div-gpt-ad-1350464014553-1').addService(googletag.pubads());
    googletag.defineSlot('/35085906/Zing.News_Article_bottom3', [468, 60], 'div-gpt-ad-1350464014553-2').addService(googletag.pubads());
    googletag.defineSlot('/35085906/Zing.News_Article_bottom4', [468, 60], 'div-gpt-ad-1350464014553-3').addService(googletag.pubads());
    googletag.defineSlot('/35085906/Zing.News_Article_bottom5', [468, 60], 'div-gpt-ad-1350464014553-4').addService(googletag.pubads());
    googletag.defineSlot('/35085906/Right_sidebar_bottom', [300, 250], 'div-gpt-ad-1353481409381-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});