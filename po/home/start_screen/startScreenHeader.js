'use strict';

class StartScreenHeader {
	constructor (){
		this.WholeHeader = element(by.css("#topnav_desktop"));
		this.VimeoHeaderLogo = element(by.css(".topnav_desktop_logo"));
		this.LoginButton = element(by.css("li[data-menu-id='login'] .js-topnav_menu_auth"));
		this.SearchInput = element(by.css(".topnav_menu_search_input"));
		this.UserAvatar = element(by.css("#topnav_menu_avatar"));
		this.ManageVideosButton = element(by.css("li[data-menu-id='create']"));
		this.WatchButton = element(by.css("li[data-menu-id='watch']"));
	};
}

module.exports = StartScreenHeader;