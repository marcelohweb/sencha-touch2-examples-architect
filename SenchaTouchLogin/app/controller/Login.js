/*
 * File: app/controller/Login.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Login', {
	
	
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginForm: {
                selector: 'loginform',
                xtype: 'Ext.form.Panel'
            },
            myViewport: {
                selector: 'myviewport',
                xtype: 'Ext.Container'
            },
            mainPanel: {
                selector: 'mainpanel',
                xtype: 'Ext.Panel'
            }
        },

        control: {
            "loginform #loginbtn": {
                tap: 'onLogInButtonTap'
            },
            "mainpanel #logoutbtn": {
                tap: 'onLogOutButtonTap'
            }
        }
    },

    onLogInButtonTap: function(button, e, eOpts) {
        var form = button.up('loginform'),
            user = form.down('#user'),
            pass = form.down('#pass'),
            label = form.down('#failmsg'),
            me = this;

        label.hide();

        var userName = user.getValue(),
            password = pass.getValue();

        var task = Ext.create('Ext.util.DelayedTask', function () {
            label.setHtml('');
            me.onSignInCommand(form, userName, password);
            user.setValue('');
            pass.setValue('');
        });

        task.delay(500);
    },

    onLogOutButtonTap: function(button, e, eOpts) {
        var me = this,
            login = me.getLoginForm(),
            myViewport = me.getMyViewport();

        myViewport.animateActiveItem(login, {type: 'slide', direction: 'right'});
    },

    onSignInCommand: function(login, username, password) {
        var me = this;

        if (username.length === 0 || password.length === 0) {
            login.showSignInFailedMessage('Por favor, informe seu usuário e senha.');
            return;
        }

        login.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        if (username.length > 0 || password.length > 0) {
            me.signInSuccess();
        }
    },

    signInSuccess: function() {
        var me = this,
            login = me.getLoginForm(),
            mainPanel = me.getMainPanel(),
            myViewport = me.getMyViewport();

        login.setMasked(false);
        myViewport.animateActiveItem(mainPanel, {type: 'slide', direction: 'left'});
    }

});