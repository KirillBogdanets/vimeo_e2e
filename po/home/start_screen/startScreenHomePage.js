'use strict';

const StartScreenHeader = require("./startScreenHeader");

class StartScreenPage extends StartScreenHeader {
	constructor (){
        super();
        this.Tagline = element(by.css(".tagline"));
		this.CameoLogo = element(by.css(".logo"));
		this.DownloadCameoButton = element(by.css(".button.download"));
		this.ScreenPicture = element(by.css(".animation_wrapper"));
	};
}

module.exports = StartScreenPage;