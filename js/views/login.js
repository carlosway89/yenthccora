define([
    'text!/templates/login.php',
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
                'submit form.form-signin':'login'
            },
            initialize: function() {
                this.render();
            },
            login:function(){
                this.do_signin();
                return false;
                
            },
            do_signin:function(){
                var that = this;
                var button = this.$el.find('button.signin-button');
                var html = button.html();
                button.html('Please wait...').attr('disabled','disabled');
                Parse.User.logIn(this.username(),this.password(), {
                    success: function(user) {
                        console.log(user);
                        button.html(html).removeAttr('disabled');
                        // save token in Cookie
                        that.beans.createCookie('user.session',user._sessionToken,10);

                        var div_error=that.$el.find('.error-row');
                        that.beans.user_alert('success',div_error,'Login successfully');
                        setTimeout(function(){
                            window.location.reload();
                        },300);
                    },
                    error: function(user, error) {
                        button.html(html).removeAttr('disabled');

                        var div_error=that.$el.find('.error-row');
                        that.beans.user_alert('error',div_error,'Invalid login parameters');
                    }
                });
            },
            render: function() {
                this.$el.html( Handlebars.compile( tmpl)(this));
                return this;
            },
            username: function(){ return this.$el.find('input#loginUser').val(); },
            password: function(){ return this.$el.find('input#loginPass').val(); }

        });
    }
);