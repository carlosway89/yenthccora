<!DOCTYPE html>
<html>
  <head>
    <title>Projects</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet/less" href="css/styles.less" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/jquery-ui-1.9.2.custom.js"></script>
    <script src="js/jquery.tubular.1.0.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/xo-validate.js"></script>
    <script src="js/less.js"></script>
    <script src="js/underscore.js"></script>
    <script src="js/handlebars.js"></script>
    <script src="js/backbone.js"></script>
    <script src="js/parse.js"></script>
    <script src="js/backbone-parse.js"></script>
    <script src="js/jquery-beat.min.js"></script>
    <script src="js/pretty.js"></script>
    <script src="js/script.min.js"></script>
    <script src="js/xo.js"></script>
    <script data-main="js/main" src="js/require.js"></script>

    <script>




      
      $().ready(function() {

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
    </script>

  </head>

<body>


    <div id="wrapper">
      
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <ul id="sidebar_menu" class="sidebar-nav">
             <li class="sidebar-brand"><a id="menu-toggle" href="javascript:void(0);">Menu<span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
        </ul>
        <ul class="sidebar-nav" id="sidebar">     
          <li><a href="javascript:void(0);" data-toggle="tooltip" class="subicon" data-placement="right" title="Home">Home<span class="sub_icon glyphicon glyphicon-home"></span></a></li>
          <li><a href="javascript:void(0);" data-toggle="tooltip" class="subicon" data-placement="right" title="Surfboards">Surfboards<span class="sub_icon glyphicon glyphicon-picture"></span></a></li>
          <li><a href="javascript:void(0);" data-toggle="tooltip" class="subicon" data-placement="right" title="Team">Team<span class="sub_icon glyphicon glyphicon-user"></span></a></li>
          <li><a href="javascript:void(0);" data-toggle="tooltip" class="subicon" data-placement="right" title="Contact">Contact<span class="sub_icon glyphicon glyphicon-envelope"></span></a></li>
          
        </ul>
      </div>
          
      <!-- Page content -->
      <div id="page-content-wrapper">
        <!-- Keep all page content within the page-content inset div! -->
        <div class="page-content inset">
          <div class="row hidden-xs menu-image">
              <div class="col-md-2 col-sm-2 col-xs-12 col-5">
                <a id="home" href="#home">
                  <div class="sub-menu">
                    <div id="home-link" class="text-right padding20">
                      <label>Home</label></br>
                      <small>Bienvenidos</small>
                    </div>                  
                  </div>
                </a>
                <img id="img-1" class="max-width160 unmargin img-responsive" style="display:none" src="img/20_1.jpg">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-12 col-5">
                <a id="surfboards" href="#surfboards">
                  <div class="sub-menu">                  
                    <div id="surfboard-link" class="text-right padding20" style="display:none">
                      <label>Surfboards</label></br>
                      <small>Tablas de Surf</small>
                    </div>  
                  </div>
                </a>
                <img id="img-2" class="max-width160 unmargin img-responsive" style="display:none" src="img/8_1.jpg">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-12 col-5">
                <a id="team" href="#team">
                  <div class="sub-menu">
                    <div id="team-link" class="text-right padding20" style="display:none">
                      <label>Team</label></br>
                      <small>Equipo</small>
                    </div>
                  </div>
                </a>
                <img id="img-3" class="max-width160 unmargin img-responsive" style="display:none" src="img/2_1.jpg">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-12 col-5">
                <a id="news" href="#news">
                  <div class="sub-menu">
                    <div id="news-link" class="text-right padding20" style="display:none">
                      <label>News</label></br>
                      <small>Novedades</small>
                    </div>
                  </div>
                </a>
                <img id="img-4" class="max-width160 unmargin img-responsive" style="display:none" src="img/9_1.jpg">
              </div>
              <div class="col-md-2 col-sm-2 col-xs-12 col-5">
                <a id="contact" href="#Contact">
                  <div class="sub-menu">                  
                    <div id="contact-link" class="text-right padding20" style="display:none">
                      <label>Contact</label></br>
                      <small>Contacto</small>
                    </div>
                  </div>
                </a>
                <img id="img-5" class="max-width160 unmargin img-responsive" style="display:none" src="img/11_1.jpg">
              </div>
          </div>
          <div class="row padding100 absolute-position view-container" style="display:none">
              
                          
          </div>
        </div>
      </div>
      
    </div>




</body>
</html>