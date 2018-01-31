'use strict';

class ItunesCameoPage {
	constructor (){
		this.CameoLogo = element(by.css("div[class*='product-hero']"));
		this.ShortDescriptionText = element(by.css(".product-header__title"));
		this.AppsInformation = element(by.css(".information-list"));
		this.Categories = element.all(by.css(".information-list .l-row dd"));
	};
}

module.exports = ItunesCameoPage;