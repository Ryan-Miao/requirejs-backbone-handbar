
require.config({
	baseUrl: "./js/",
	paths: {
		"jquery": "libs/jquery-1.11.3.min",
		"underscore": "libs/underscore-min",
		"backbone": "libs/backbone-min",
		"view": "view",
		"model": "model"
	}
});

require(['view'], function(View){
	new View();
});