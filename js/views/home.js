define([
    // 'text!/Pruebas/templates/home.php',
    'views/home-item',
    'text!/Pruebas/templates/home.php',
    'beans',
    'collections/parse',
    'models/parse',
    'channel'
],
    function(HomeItem,tmpl,Beans,ParseCollection,ParseModel,Channel) {
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
            show_item:function(div){
                            
              $.each(this.array,function(item,model){
                    var view = new HomeItem({
                        model:model
                    });
                    div.append( view.render().el );

                });
              div.fadeIn(1500); 
              
            },
            call_model:function(){

              var that=this;

              var data  = new ParseCollection({ name: 'FavorRequest' });
              var div=$('#products');
              //show preloader
              this.beans.preloader(div);

              data.fetch({
                  success: function(coll,res,opt){
                      $.each(res.results,function(index,result){
                          that.array.push( new ParseModel(result) );
                      });
                      //remove preloader
                      
                      div.fadeOut(function(){
                        that.$el.find('#waiting-preloader').remove();
                        that.show_item(div);
                      });
                      
                  }
              });

            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                this.call_model();
                return this;
            }

        });
    }
);