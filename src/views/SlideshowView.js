define(function(require, exports, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var SlideView = require('views/SlideView');
    var Lightbox = require('famous/views/Lightbox');

	function SlideshowView () {
 		Views.apply(this, arguments);
 		this.rootModifier = new StateModifier({
 			size:this.options.size
 		});
 		this.mainNode = this.add(this.rootModifier);
 		_createLightBox.call(this);
 		_createSlides.call(this);
 		
	}

	SlideshowView.prototype = Object.create(Views.prototype);
	SlideshowView.prototype.constructor = SlideshowView;

	SlideshowView.DEFAULT_OPTIONS = {
		size: [450, 500],
		lightboxOpts:{},
		data: undefined
	};
	module.exports = SlideshowView;

	SlideshowView.prototype.showCurrentSlide = function(){
		console.log(this.currentIndex);
		debugger
		var slide = this.slides[this.currentIndex];
        this.lightbox.show(slide);
	}

	SlideshowView.prototype.showNextSlide = function(){
		this.currentIndex++;
		if(this.currentIndex === this.slides.length)
			this.currentIndex=0;
		this.showCurrentSlide();
	}

	function _createSlides(){
		this.slides = [];
		this.currentIndex = 0;
		for(var i=0; i<this.options.data.length; i++){

			var slide = new SlideView({
				size: this.options.size,
				photoUrl: this.options.data[i]
			});
			slide.on('nextSlide', this.showNextSlide.bind(this));
			this.slides.push(slide);
		}
		this.showCurrentSlide();
	}


	function _createLightBox(){
		this.lightbox = new Lightbox(this.options.lightboxOpts);
		this.mainNode.add(this.lightbox);
	}
});