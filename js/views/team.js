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
                this.call_images();

            },
            call_images:function(){
                
              var that=this;
              var content=that.$el.find('.content-page');

              var team = new ParseCollection({
                name: 'team',
                sort: '-createdAt',
                });
                var image_team=content.find('.team-images');
                image_team.empty();
                
                team.fetch({
                    success: function(collection,results,options){                    
                        $.each( results.results,function(index,result){
                            var image='<div class="col-sm-3 thumb"><a href="#" class="thumbnail" data-toggle="modal" data-target="#lightbox"><img src="'+result.image.url+'" alt="..."></a></div>';
                            image_team.append(image);                          
                        });
                        
                    }
                }); 

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                var that=this;

                $(document).ready(function() {

                    setTimeout(function(){

                        var $lightbox = $('#lightbox');

                        $('[data-target="#lightbox"]').on('click', function(event) {

                            console.log('disparo');

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

                    },5000);

                    
                });

                
                return this;
            }

        });
    }
);