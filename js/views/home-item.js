define([
    'text!/Pruebas/templates/home-item.php',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(tmpl,Beans,ParseCollection,ParseModel,Channel) {
        return Backbone.View.extend({
            template: Handlebars.compile(tmpl),
            beans: new Beans,
            debug: true,
            tagName:'div',
            className: 'item  col-xs-4 col-lg-4',
            events: {
            },
            initialize: function() {
                this.render();
            },
            title:function(){ return this.model.get('title'); },
            description:function(){ return this.model.get('description'); },
            createdAt:function(){ return this.model.get('createdAt'); },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));

                return this;
            }
        });
    }
);