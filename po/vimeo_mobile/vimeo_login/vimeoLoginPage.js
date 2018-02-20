'use strict';

class VimeoMobileLoginPage {
    constructor (){
        this.VimeoLogo = element(by.css(".content .auth_vimeo_logo"));
        this.LogInContainerButton = element(by.css("li:nth-child(2).tab>span>span"));
        this.LoginContainer = element(by.css('#tab-login'));
        this.EmailInputInLoginContainer = this.LoginContainer.$('#email');
        this.PasswordInputInLoginContainer = this.LoginContainer.$('#password');
        this.LogInButtonInLoginContainer = this.LoginContainer.$('#login_btn');
    };
}

module.exports = VimeoMobileLoginPage;