define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');
    var AppView = require('views/AppView');
    var SlideData = require('data/SlideData');
    var Utility = require('famous/utilities/Utility');
	var mainContext = Engine.createContext();

	Utility.loadURL(SlideData.getUrl(), initApp);
 	function initApp(data){
 		data = SlideData.parse(data);
		var appView = new AppView({ data : data });
		mainContext.add(appView);
 	}
});