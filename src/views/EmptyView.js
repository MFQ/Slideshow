define(function(require, export, module){
	var Views = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	function EmptyView () {
		this.apply(this, arguments)
	}

	EmptyView.prototype = Object.create(View.prototype);
	EmptyView.prototype.constructor = EmptyView;

	EmptyView.DEFAULT_OPTIONS = {};
	module.exports = EmptyView;
});