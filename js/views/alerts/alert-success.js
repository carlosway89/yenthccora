define([
    'text!/templates/alert.hbs'
],
    function(tmpl) {
        return Backbone.View.extend({
            _message: '',
            className: 'alert alert-success',
            template: Handlebars.compile(tmpl),
            events: {
            },
            initialize: function(options) {
                this._message = options.message;
            },
            render: function() {
                var that = this;
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.$el.hide();
                this.$el.find('span').html( this._message );
                setTimeout(function(){
                    that.$el.fadeIn('fast');
                    that.bye_bye();
                },100);
                return this;
            },
            bye_bye: function(){
                var that = this;
                setTimeout(function(){
                    that.$el.fadeOut('slow',function(){
                        that.$el.remove();
                    });
                },8000);
            }
        });
    }
);
