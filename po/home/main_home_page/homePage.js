'use strict';

const Header = require("./header");

class HomePage extends Header {
	constructor (){
		super();

		this.HomeTaglineZone = element(by.css("#phone .inner header"));
		this.HomeTagline = element(by.css("#phone .inner header p"));
		this.PhonePicture = element(by.css(".phone_picture"));

		this.AdvantagesBox = element(by.css("#features"));

		this.FiltersBox = element(by.css(".animation_wrapper"));
		this.ThemeText = element(by.css(".navigation .theme"));
		this.RightArrowButton = element(by.css(".navigation .right .icon"));
		this.LeftArrowButton = element(by.css(".navigation .left .icon"));
		
		this.SoundtracksBox = element(by.css("#soundtracks"));
		this.SoundtracksContent = element(by.css("#soundtracks .content_wrapper"));

		this.VideosBox = element(by.css("#videos"));
		this.VideosList = element(by.css("#videos .video_list"));
		this.WatchMoreButton = element(by.css("#videos a[target]"));

		this.CreatorsBox = element(by.css("#creators"));
		this.ExploreMoreButton = element(by.css("#creators .more_link"));

		this.DownloadBox = element(by.css("#download"));
		this.DownloadOnAppleStoreButton = element(by.css(".badge_app_store"));
	};
}

module.exports = HomePage;