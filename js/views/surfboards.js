define([
    'text!/templates/surfboards.php',
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
            events: {
            },
            initialize: function() {
                this.render();
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                
                $(window).bind("load resize slid.bs.carousel", function() {
                  var imageHeight = $(".active .holder").height();
                  $(".controllers").height( imageHeight );
                  console.log("Slid");
                });

                return this;
            }

        });
    }
);