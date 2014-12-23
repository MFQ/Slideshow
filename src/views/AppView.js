define(function(require, exports, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	var SlideshowView = require('views/SlideshowView');

	function AppView () {
 		Views.apply(this, arguments);
 		var slideShowView = new SlideshowView();
 		this.add(slideShowView);
	}

	AppView.prototype = Object.create(Views.prototype);
	AppView.prototype.constructor = AppView;

	AppView.DEFAULT_OPTIONS = {};
	module.exports = AppView;
});