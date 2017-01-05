
require.config({
	baseUrl: "./js/",
	paths: {
		"jquery": "libs/jquery-1.11.3.min",
		"handlebars": "libs/handlebars.min"
	}
});

require(['jquery', 'handlebars'], function($, Handlebars){
	Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		if(v1 === v2) {
			return options.fn(this);
		}else {
			return options.inverse(this);
		}
	});
	Handlebars.registerHelper('addOne', function(value) {
		return parseInt(value) + 1;
	});
	// use case
	var template = Handlebars.compile($("#view-template").html());
	var data = {
		v1: '123',
		v2: '1234'
	};
	var html = template(data);
	$('#id').html(html);
});