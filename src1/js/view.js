
define('view', ['jquery', 'underscore', 'backbone', 'model'], function($, _, Backbone, Model){
	var View = Backbone.View.extend({
		el: '#id',
		events: {
			'click #submitBtn': 'postData'
		},
		initialize: function(){
			this.model = new Model();
			this.listenTo(this.model, 'sync', this.render);

			this.model.fetch();
		},
		render: function(){
			var data = this.model.toJSON();
			//do something
		},
		postData: function(){
			var data;
			// get data from page
			this.model.save({
				data: data
			});
		}
	});
	return View;
});