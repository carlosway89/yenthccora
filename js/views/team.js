define([
    'text!/templates/team.php',
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
                var that=this;

                $(document).ready(function() {


                    var $lightbox = $('#lightbox');
                    
                    $('[data-target="#lightbox"]').on('click', function(event) {
                        var $img = $(this).find('img'), 
                            src = $img.attr('src'),
                            alt = $img.attr('alt'),
                            css = {
                                'maxWidth': $(window).width() - 100,
                                'maxHeight': $(window).height() - 100
                            };
                    
                        $lightbox.find('.close').addClass('hidden');
                        $lightbox.find('img').attr('src', src);
                        $lightbox.find('img').attr('alt', alt);
                        $lightbox.find('img').css(css);
                    });
                    
                    $lightbox.on('shown.bs.modal', function (e) {
                        var $img = $lightbox.find('img');
                            
                        $lightbox.find('.modal-dialog').css({'width': $img.width()});
                        $lightbox.find('.close').removeClass('hidden');
                    });
                });
                return this;
            }

        });
    }
);