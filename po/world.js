
const HomePage = require('./home/main_home_page/homePage');
const StartScreenPage = require('./home/start_screen/startScreenHomePage');
const LoginToVimeoPopup = require('./home/popups/loginToVimeoPopup');
const ItunesCameoPage = require('./itunes/itunesCameoPage');

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.StartScreenHomePage = new StartScreenPage();
		this.LoginToVimeoPopup = new LoginToVimeoPopup();
		this.ItunesCameoPage = new ItunesCameoPage();
	}
}

module.exports = new World();