// Filename: router.js
 define([
     'beans',
     'models/parse',
     'channel'
     ], function(
        Beans,
        ParseModel,
        Channel
     ){
        var AppRouter = Backbone.Router.extend({
            beans: new Beans,
            debug: true,
            routes: {
                'home': 'home',
                'surfboards':'surfboards',
                'team':'team',
                'news':'news',
                'contact':'contact'
            },


            home: function(){


                var that=this;
                setTimeout(function(){
                    that.initial_page('home');
                },200);

                require(['views/home'],function(Home){
            
                    var view = new Home({
                        el: $('div.view-container')
                    });
                });
                
                

                    
            },
            surfboards: function(){


                var that=this;

                setTimeout(function(){
                    that.initial_page('surfboards');
                },200);

                require(['views/surfboards'],function(Surfboards){
            
                    var view = new Surfboards({
                        el: $('div.view-container')
                    });
                });
                
                

                    
            },
            team: function(){


                var that=this;
                setTimeout(function(){
                    that.initial_page('team');
                },200);

                require(['views/team'],function(Team){
            
                    var view = new Team({
                        el: $('div.view-container')
                    });
                });
                
                

                    
            },
            news: function(){


                var that=this;
                setTimeout(function(){
                    that.initial_page('news');
                },200);

                require(['views/news'],function(News){
            
                    var view = new News({
                        el: $('div.view-container')
                    });
                });
                
                

                    
            },
            contact: function(){


                var that=this;
                setTimeout(function(){
                    that.initial_page('contact');
                },200);
                require(['views/contact'],function(Contact){
            
                    var view = new Contact({
                        el: $('div.view-container')
                    });
                });
                
                

                    
            },            
            initial_page:function(root){

                
                var content=$('div.menu-image');
                var view=$('div.view-container');
                
                var logo=$('.logo_initial');
                content.find('div').removeClass('active');
                content.find('#'+root).find('.sub-menu').addClass('active').find('#'+root+'-link').addClass('active').show();
                

                if(!view.is(':visible')){
                    logo.addClass('logo_final');
                    view.delay(300).show('drop',800);
                }                    
                else
                    view.hide('drop',800,function(){
                        view.delay(300).show('drop',800);    
                    });           

            }


        });
        var initialize = function(){

                /**
                 * Now that we've loaded both APIs, we can proceed to begin routing...
                 */
                var app_router = new AppRouter;
                
                app_router.on('route:defaultAction', function(actions){

                    /**
                     * We don't know this view, so show a 404
                     */
                    require(['views/four-oh-four'],function(FourOhFour){

                        var $div = $('div.view-container');
                        $div.addClass( 'container-message container');

                        new FourOhFour({
                            el: $div
                        });

                    });

                });

                /**
                 * Set default route
                 */
                // if ( ! window.location.hash.length ) window.location.hash = '#home';
                Backbone.history.start();

     };
 return {
     initialize: initialize
    };
 });