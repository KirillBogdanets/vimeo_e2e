@smoke
Feature: Smoke Tests

  @scrolling
  @prepearedStatementForHomePage
  Scenario: Verify that some elements will resize, floating or disappear after scrolling to the bottom
    Given I am on Main page
    When I am logged in as "bogdanetskirill@gmail.com" with "qweasdzxc123" password
    Then I wait 4 seconds
      And I wait until "WholeHeader" on StartScreen is visible
      And I remember "WholeHeader" element size on StartScreen as "HeaderSize"
      And "UserAvatar" on StartScreen should be visible
      And "CameoLogo" on StartScreen should be in viewport
    Then Text of "Tagline" element on StartScreen should be equal to "EDIt AND SHARE CINEMATIc ViDEOS ON YOUR PHONE" ignoring case
      And I wait 1 seconds
      And "DownloadCameoButton" on StartScreen should be in viewport
      And I wait 1 seconds
      And "DownloadBox" on HomePage should not be in viewport
    Then I scroll down page by 400 pixels
      And I remember "WholeHeader" element size on StartScreen as "HeaderSize1"
      And I wait 1 seconds
    Then Remembered value as "HeaderSize" should be bigger then "HeaderSize1"
    Then I scroll down page by 400 pixels
      And I remember "WholeHeader" element size on StartScreen as "HeaderSize2"
      And I wait 1 seconds
    Then Remembered value as "HeaderSize1" should be bigger then "HeaderSize2"
    When I scroll down page by 100 pixels
    Then I remember "HomeTaglineZone" element size on HomePage as "HomePageTagLine"
      And I scroll down page by 50 pixels
      And I wait 1 seconds
    Then "HomeTaglineZone" on HomePage should be in viewport
      And Text of "HomeTagline" element on HomePage should be equal to "Turn your video clips into gorgeous short films in just a few swipes. All you need is an iPhone and the free Cameo app."
      And I wait 1 seconds
      And "PhonePicture" on HomePage should be in viewport
    When I remember "HomeTaglineZone" element size on HomePage as "HomePageTagLine1"
      And I wait 1 seconds
    Then Remembered value as "HomePageTagLine" should be smaller then "HomePageTagLine1"
    When I scroll down page by 100 pixels
    Then "AdvantagesBox" on HomePage should be in viewport
    When I scroll to the "ThemeText" element on HomePage
      And I wait until "ThemeText" on HomePage is visible
    Then "ThemeText" on HomePage should be in viewport
      And "PhonePicture" on HomePage should not be in viewport
      And Text of "ThemeText" element on HomePage should be equal to "Treehouse" ignoring case
      And I wait 1 seconds
    Then I click "RightArrowButton" element on HomePage page
      And I wait 1 seconds
      And Text of "ThemeText" element on HomePage should be equal to "Silhouette" ignoring case
    Then I click "LeftArrowButton" element on HomePage page
      And I wait 1 seconds
      And Text of "ThemeText" element on HomePage should be equal to "Treehouse" ignoring case
    Then I scroll to the "SoundtracksBox" element on HomePage
      And "SoundtracksContent" on HomePage should be in viewport
    Then "ThemeText" on HomePage should not be in viewport
    Then I scroll to the "VideosBox" element on HomePage
      And "VideosList" on HomePage should be in viewport
      And "SoundtracksContent" on HomePage should not be in viewport
      And I wait 2 seconds
      And Text of "WatchMoreButton" element on HomePage should be equal to "WATCH MORE"
    Then I scroll to the "CreatorsBox" element on HomePage
      And "ExploreMoreButton" on HomePage should be in viewport
      And "VideosList" on HomePage should not be in viewport
      And I wait 2 seconds
      And Text of "ExploreMoreButton" element on HomePage should be equal to "EXPLORE MORE"
    Then I scroll to the "DownloadBox" element on HomePage
      And "DownloadOnAppleStoreButton" on HomePage should be in viewport
      And "ExploreMoreButton" on HomePage should not be in viewport

  @download
  @prepearedStatementForHomePage
  Scenario: Verify that after clicking on Download button browser open Itunes with necessary app
    Given I am on Main page
    When I am logged in as "bogdanetskirill@gmail.com" with "qweasdzxc123" password
    Then I wait 4 seconds
      And I wait until "WholeHeader" on StartScreen is visible
      And "UserAvatar" on StartScreen should be visible
      And "CameoLogo" on StartScreen should be in viewport
    Then Text of "Tagline" element on StartScreen should be equal to "EDIT AND SHARE CINEMATIC VIDEOS ON YOUR PHONE"
      And "DownloadCameoButton" on StartScreen should be in viewport
    Then I click "DownloadCameoButton" element on StartScreen page
    Then I wait until "CameoLogo" on ItunesCameoPage is visible
      And "ShortDescriptionText" on ItunesCameoPage should be visible
      And Text of "ShortDescriptionText" element on ItunesCameoPage should be equal to "Cameo - Video Editor and Movie Maker 4+"
    Then I scroll down page by 1100 pixels
      And I wait 2 seconds
      And "AppsInformation" on ItunesCameoPage should be in viewport
      And I wait 2 seconds
      And Text of #"1" element of "Categories" collection on ItunesCameoPage should be equal to "Vimeo"
      And Text of #"2" element of "Categories" collection on ItunesCameoPage should be equal to "120.2 MB"
      And Text of #"3" element of "Categories" collection on ItunesCameoPage should be equal to "Photo & Video"
      And Text of #"4" element of "Categories" collection on ItunesCameoPage should be equal to "Requires iOS 8.0 or later. Compatible with iPhone, iPad, and iPod touch."
      And Text of #"5" element of "Categories" collection on ItunesCameoPage should be equal to "English, Spanish"
      And Text of #"6" element of "Categories" collection on ItunesCameoPage should be equal to "Rated 4+"
      And Text of #"7" element of "Categories" collection on ItunesCameoPage should be equal to "© 2016 Vimeo, Inc."
      And Text of #"8" element of "Categories" collection on ItunesCameoPage should be equal to "Free"
