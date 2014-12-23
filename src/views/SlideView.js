define(function(require, exports, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	function SlideView () {
 		Views.apply(this, arguments);
	}

	SlideView.prototype = Object.create(Views.prototype);
	SlideView.prototype.constructor = SlideView;

	SlideView.DEFAULT_OPTIONS = {};
	module.exports = SlideView;
});