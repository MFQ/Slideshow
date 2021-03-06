define(function(require, exports, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var ImageSurface = require('famous/surfaces/ImageSurface');
	var SlideshowView = require('views/SlideshowView');
	var ContainerSurface = require('famous/surfaces/ContainerSurface');

	function AppView () {
 		Views.apply(this, arguments);
 		// var slideShowView = new SlideshowView({ data : this.options.data });
 		// this.add(slideShowView);
 		_createCamera.call(this);
 		_createSlideshow.call(this);
	}

	AppView.prototype = Object.create(Views.prototype);
	AppView.prototype.constructor = AppView;

	AppView.DEFAULT_OPTIONS = {
		data: undefined,
        cameraWidth: 0.5 * window.innerHeight
	};
	AppView.DEFAULT_OPTIONS.slideWidth = 0.8 * AppView.DEFAULT_OPTIONS.cameraWidth;
    AppView.DEFAULT_OPTIONS.slideHeight = AppView.DEFAULT_OPTIONS.slideWidth + 40;
    AppView.DEFAULT_OPTIONS.slidePosition = 0.77 * AppView.DEFAULT_OPTIONS.cameraWidth;

	function _createSlideshow() {
        var slideshowView = new SlideshowView({
            size: [this.options.slideWidth, this.options.slideHeight],
            data: this.options.data
        });

        var slideshowModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.translate(500, this.options.slidePosition, 0)
        });

        var slideshowContainer = new ContainerSurface({
            properties: {
                overflow: 'hidden'
            }
        });

        this.add(slideshowModifier).add(slideshowContainer);
        slideshowContainer.add(slideshowView);
        slideshowContainer.context.setPerspective(1000);

    }

	function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth, true],
            content: 'img/camera.png',
            properties: {
                width: '100%'
            }
        });

        var cameraModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.behind
        });

        this.add(cameraModifier).add(camera);
    }

    module.exports = AppView;

});