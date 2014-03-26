/**
 * Project:     [     ]
 * Module:      Backbone and Parse JavaScript architecture
 * Component:   JavaScript library

 * Description: This library contains reusable code that could be
 *  used potentially anywhere in the site code

 * Author:      Carlos Manay  <carlos@reality-magic.com>
 */
define([
    'channel',
    'models/parse',
    'collections/parse'],function (Channel,ParseModel,ParseCollection) {
    //"use strict";

    var Beans = function(){

        /**
         * Allows us to debug the entire module, or any method
         * @type {boolean}
         */
        this.debug = false;

        /**
         * Does the application allow for HTTPS?
         * @returns {boolean} true if it does
         */
        this.allow_ssl = function(){

            return !! ($('body').hasClass('ssl-yes'));

        };

        /**
         * Is the given string alpha-numeric?
         * @param string the string to test
         * @returns {boolean} true if it is, false otherwise
         */
        this.is_alphanum = function(string){
            return /^([a-zA-Z0-9]+)$/.test( string );
        };
        /**
         * Show a Preloader
         * @param root 
         */
        this.preloader= function(root){
            var view = null;
            // remove existing
            if ( root.children().length )
                root.children().remove();

            require(['views/preloader'],function(Preloader){
                view = new Preloader();
                if ( view ) root.prepend( view.render().el );
            });
        };
        /**
         * Show a User Alert
         * @param type
         * @param root
         * @param message
         */
        this.user_alert = function(type,root,message){
            var view = null;
            // remove existing
            if ( root.children().length )
                root.children().remove();
            switch ( type ){
                case 'success':
                    require(['views/alert-success'],function(AlertSuccess){
                        view = new AlertSuccess({
                            message: message
                        });
                        if ( view ) root.prepend( view.render().el );
                    });
                break;
                case 'error':
                    require(['views/alert-error'],function(AlertError){
                        view = new AlertError({
                            message: message
                        });
                        if ( view ) root.prepend( view.render().el );


                    });
                break;    
                case 'info':
                require(['views/alert-info'],function(AlertInfo){
                    view = new AlertInfo({
                        message: message
                    });
                    if ( view ) root.prepend( view.render().el );


                });
                break;
                case 'warning':
                require(['views/alert-info'],function(AlertWarning){
                    view = new AlertWarning({
                        message: message
                    });
                    if ( view ) root.prepend( view.render().el );


                });
                break;
            }


        };

        /**
         * Session token for logged in user
         * @type {string}
         */
        this.session_token = '';

        /**
         * Set the user's session token
         * @param token
         */
        this.set_session = function( token ){
            this.session_token = token;
        };


        /**
         * Create a new Cookie
         * @param name
         * @param value
         * @param days
         */
        this.createCookie = function(name,value,days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
        };

        this.readCookie = function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        };

        this.eraseCookie = function(name) {
            this.createCookie(name,"",-1);
        };

        /**
         * Get a friendly representation of the time
         * @param timestamp
         * @returns {string}
         */
        this.friendly_time = function( timestamp ){
            return prettyDate( timestamp );
        };

    };
    return Beans;
});
