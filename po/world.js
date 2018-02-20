
const HomePage = require('./home/main_home_page/homePage');
const StartScreenPage = require('./home/start_screen/startScreenHomePage');
const LoginToVimeoPopup = require('./home/popups/loginToVimeoPopup');
const ItunesCameoPage = require('./itunes/itunesCameoPage');
const VimeoMobileHomePage = require('./vimeo_mobile/vimeo_home/vimeoHomePage');
const VimeoMobileLoginPage = require('./vimeo_mobile/vimeo_login/vimeoLoginPage');

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.StartScreenHomePage = new StartScreenPage();
		this.LoginToVimeoPopup = new LoginToVimeoPopup();
		this.ItunesCameoPage = new ItunesCameoPage();
		this.VimeoMobileHomePage = new VimeoMobileHomePage();
		this.VimeoMobileLoginPage = new VimeoMobileLoginPage();
	}
}

module.exports = new World();