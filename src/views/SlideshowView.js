define(function(require, exports, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var SlideView = require('views/SlideView');

	function SlideshowView () {
 		Views.apply(this, arguments);
 		var slideView = new SlideView();
 		this.add(slideView);
	}

	SlideshowView.prototype = Object.create(Views.prototype);
	SlideshowView.prototype.constructor = SlideshowView;

	SlideshowView.DEFAULT_OPTIONS = {};
	module.exports = SlideshowView;
});