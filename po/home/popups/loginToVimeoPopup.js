'use strict';

class LoginToVimeoPopup {
	constructor (){
		this.WholePopup = element(by.css(".iris_modal-box"));
		this.EmailInput = element(by.css("#signup_email"));
		this.PasswordInput = element(by.css("#login_password"));
		this.LoginButton = element(by.css(".iris_btn--positive"));
	};
}

module.exports = LoginToVimeoPopup;