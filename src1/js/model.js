
define('model', ['underscore', 'backbone'], function(_, Backbone){
	var Model = Backbone.Model.extend({
		initialize: function(){
			//do something
		},
		url: './getData.json',
		parse: function(response){
			//do something
		}
	});
	return Model;
});