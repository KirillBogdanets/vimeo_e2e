'use strict';

const StartScreenHeader = require("../../home/start_screen/startScreenHeader");

class VimeoMobileHomePage {
    constructor (){
        Object.assign(this, new StartScreenHeader());
        this.StartTextField = element(by.css("h1.ab_variant"));
        this.GetStartedButton = element(by.css(".video_intro .ab_variant a"));
        this.MobileTopMenuOpenButton = element(by.css('.topnav_mobile_header_logo'));
        this.MobileLoginButtonButton = element(by.css('.menu_icon_join'));
    };
}

module.exports = VimeoMobileHomePage;