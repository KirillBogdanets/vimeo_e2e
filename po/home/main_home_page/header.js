'use strict';

class Header {
	constructor (){
		this.HeaderButtons = element(by.css(".section_menu"));
		this.DownloadHeaderButton = element(by.css(".highlight_link"));
	};
}

module.exports = Header;