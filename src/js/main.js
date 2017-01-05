
require.config({
	baseUrl: "./js/",
	paths: {
		"jquery": "libs/jquery-1.11.3.min",
		"underscore": "libs/underscore-min",
		"backbone": "libs/backbone-min"
	}
});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	console.log("jquery, underscore & backbone have been loaded");
});