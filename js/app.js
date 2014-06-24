 define([
     'router',
     'globals',
     'beans',
     'channel'
     ], function(AppRouter,Globals,Beans,Channel){
     var initialize = function(){
         var beans = new Beans;
         var debug = false;
         var $this = this;

        $().ready(function() {
            Parse.initialize('4uoy5CdUu1d8U0v6CJLpEqi26HWRVGJOMVhFALw2','I65nhQrgNKrjV2XDq02rxGwClGLSC5SLQrhVL0Jt');

            $('.logo_initial').fadeIn(2500);

            $("#menu-toggle").click(function(e) {
                  e.preventDefault();
                  console.log('clickeado');
                  $("#wrapper").toggleClass("active");
            });
            
            $(".subicon").tooltip();

            $("#clickea").click(function(e) {
                  e.preventDefault();
                  $(".pruebita").show("drop",1000);
            });

            $('.sub-menu').hover(function(e){
              var val=$(e.currentTarget);
              val.find('.text-right').show();
            },function(e){
              var val=$(e.currentTarget);
              var div=val.find('.text-right');
              if(!div.hasClass('active'))
                div.hide();
            });
            
            for (var i = 1; i <= 5; i++) {                
                $('#img-'+i).delay(600*i).show('bounce',800);            
            };
            

              // $('#wrapper').tubular({
              //   videoId: 'EgtDwjrV8fQ',
              //   width:100 
              // }); 

              // where idOfYourVideo is the YouTube ID.              

              // ratio: 16/9 // usually either 4/3 or 16/9 -- tweak as needed
              // videoId: 'ZCAnLxRvNNc' // toy robot in space is a good default, no?
              // mute: true
              // repeat: true
              // width: $(window).width() // no need to override
              // wrapperZIndex: 99
              // playButtonClass: 'tubular-play'
              // pauseButtonClass: 'tubular-pause'
              // muteButtonClass: 'tubular-mute'
              // volumeUpClass: 'tubular-volume-up'
              // volumeDownClass: 'tubular-volume-down'
              // increaseVolumeBy: 10 // increment value; volume range is 1-100
              // start: 0 // starting position in seconds


        });

        AppRouter.initialize();
            
        
    };
     return {
         initialize: initialize
     };
     // What we return here will be used by other modules
});