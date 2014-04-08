define([
    'text!/templates/language.php',
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
            array:[],
            className: 'lang',
            tagName: 'a',
            events: {
                'click .flags':'change_language'
            },
            initialize: function() {
                
            },
            change_language:function(){
                this.beans.createCookie('language.choice',this.lang(),10);
                Channel.trigger('change.language.bar');                
                this.$el.find('.flags').addClass('flag-actived');

            },            
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));                
                this.$el.fadeIn(2000);
                this.$el.attr('title',this.type());
                return this;
            },
            lang:function(){ return this.model.attributes.lang;},
            flag:function(){ return this.model.attributes.flag;},
            type:function(){ return this.model.attributes.type;}

        });
    }
);