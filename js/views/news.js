define([
    'text!/templates/news.php',
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
                this.call_shop();
            },
            call_shop:function(){
                
              var that=this;
              var content=that.$el.find('.content-page');

              var surfshop = new ParseCollection({
                name: 'surfshop',
                sort: '-createdAt',
                });
                var image_surfshop=content.find('.surf-shop-content');
                image_surfshop.empty();
                
                surfshop.fetch({
                    success: function(collection,results,options){                    
                        $.each( results.results,function(index,result){
                            var description='<div class="col-sm-4 col-md-4"><div class="post"><div class="post-img-content"><img src="'+result.image.url+'" class="img-responsive" /><span class="post-title"><b>'+result.title+'</b><br><br /><b>'+result.description+'</b></span></div><div class="content"><br><br><br></div></div></div>';
                            image_surfshop.append(description);                          
                        });
                        
                    }
                }); 

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                return this;
            }

        });
    }
);