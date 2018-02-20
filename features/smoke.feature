@smoke
Feature: Smoke Tests

  @scrolling
  @prepearedStatementForHomePage
  Scenario: Verify that some elements will resize, floating or disappear after scrolling to the bottom
    Given I am on Main page
    When I am logged in as "bogdanetskirill@gmail.com" with "qweasdzxc123" password
    Then I wait 4 seconds
      And I wait until "StartScreenHomePage > WholeHeader" element is visible
      And I remember "StartScreenHomePage > WholeHeader" element size as "HeaderSize"
      And "StartScreenHomePage > UserAvatar" element should be visible
      And "StartScreenHomePage > CameoLogo" element should be in viewport
    Then Text of "StartScreenHomePage > Tagline" element should be equal to "EDIt AND SHARE CINEMATIc ViDEOS ON YOUR PHONE" ignoring case
      And I wait 1 seconds
      And "StartScreenHomePage > DownloadCameoButton" element should be in viewport
      And I wait 1 seconds
      And "HomePage > DownloadBox" element should not be in viewport
    Then I scroll down page by 400 pixels
      And I remember "StartScreenHomePage > WholeHeader" element size as "HeaderSize1"
      And I wait 1 seconds
    Then Remembered value as "HeaderSize" should be bigger then "HeaderSize1"
    Then I scroll down page by 400 pixels
      And I remember "StartScreenHomePage > WholeHeader" element size as "HeaderSize2"
      And I wait 1 seconds
    Then Remembered value as "HeaderSize1" should be bigger then "HeaderSize2"
    When I scroll down page by 100 pixels
    Then I remember "HomePage > HomeTaglineZone" element size as "HomePageTagLine"
      And I scroll down page by 50 pixels
      And I wait 1 seconds
    Then "HomePage > HomeTaglineZone" element should be in viewport
      And Text of "HomePage > HomeTagline" element should be equal to "Turn your video clips into gorgeous short films in just a few swipes. All you need is an iPhone and the free Cameo app."
      And I wait 1 seconds
      And "HomePage > PhonePicture" element should be in viewport
    When I remember "HomePage > HomeTaglineZone" element size as "HomePageTagLine1"
      And I wait 1 seconds
    Then Remembered value as "HomePageTagLine" should be smaller then "HomePageTagLine1"
    When I scroll down page by 100 pixels
    Then "HomePage > AdvantagesBox" element should be in viewport
    When I scroll to the "HomePage > ThemeText" element
      And I wait until "HomePage > ThemeText" element is visible
    Then "HomePage > ThemeText" element should be in viewport
      And "HomePage > PhonePicture" element should not be in viewport
      And Text of "HomePage > ThemeText" element should be equal to "Treehouse" ignoring case
      And I wait 1 seconds
    Then I click "HomePage > RightArrowButton" element
      And I wait 1 seconds
      And Text of "HomePage > ThemeText" element should be equal to "Silhouette" ignoring case
    Then I click "HomePage > LeftArrowButton" element
      And I wait 1 seconds
      And Text of "HomePage > ThemeText" element should be equal to "Treehouse" ignoring case
    Then I scroll to the "HomePage > SoundtracksBox" element
      And "HomePage > SoundtracksContent" element should be in viewport
    Then "HomePage > ThemeText" element should not be in viewport
    Then I scroll to the "HomePage > VideosBox" element
      And "HomePage > VideosList" element should be in viewport
      And "HomePage > SoundtracksContent" element should not be in viewport
      And I wait 2 seconds
      And Text of "HomePage > WatchMoreButton" element should be equal to "WATCH MORE"
    Then I scroll to the "HomePage > CreatorsBox" element
      And "HomePage > ExploreMoreButton" element should be in viewport
      And "HomePage > VideosList" element should not be in viewport
      And I wait 2 seconds
      And Text of "HomePage > ExploreMoreButton" element should be equal to "EXPLORE MORE"
    Then I scroll to the "HomePage > DownloadBox" element
      And "HomePage > DownloadOnAppleStoreButton" element should be in viewport
      And "HomePage > ExploreMoreButton" element should not be in viewport

  @download
  @prepearedStatementForHomePage
  Scenario: Verify that after clicking on Download button browser open Itunes with necessary app
    Given I am on Main page
    When I am logged in as "bogdanetskirill@gmail.com" with "qweasdzxc123" password
    Then I wait 4 seconds
      And I wait until "StartScreenHomePage > WholeHeader" element is visible
      And "StartScreenHomePage > UserAvatar" element should be visible
      And "StartScreenHomePage > CameoLogo" element should be in viewport
    Then Text of "StartScreenHomePage > Tagline" element should be equal to "EDIT AND SHARE CINEMATIC VIDEOS ON YOUR PHONE"
      And "StartScreenHomePage > DownloadCameoButton" element should be in viewport
    Then I click "StartScreenHomePage > DownloadCameoButton" element
    Then I wait until "ItunesCameoPage > CameoLogo" element is visible
      And "ItunesCameoPage > ShortDescriptionText" element should be visible
      And Text of "ItunesCameoPage > ShortDescriptionText" element should be equal to "Cameo - Video Editor and Movie Maker 4+"
    Then I scroll down page by 1100 pixels
      And I wait 2 seconds
      And "ItunesCameoPage > AppsInformation" element should be in viewport
      And I wait 2 seconds
      And Text of #"1" element of "ItunesCameoPage > Categories" collection should be equal to "Vimeo"
      And Text of #"2" element of "ItunesCameoPage > Categories" collection should be equal to "120.2 MB"
      And Text of #"3" element of "ItunesCameoPage > Categories" collection should be equal to "Photo & Video"
      And Text of #"4" element of "ItunesCameoPage > Categories" collection should be equal to "Requires iOS 8.0 or later. Compatible with iPhone, iPad, and iPod touch."
      And Text of #"5" element of "ItunesCameoPage > Categories" collection should be equal to "English, Spanish"
      And Text of #"6" element of "ItunesCameoPage > Categories" collection should be equal to "Rated 4+"
      And Text of #"7" element of "ItunesCameoPage > Categories" collection should be equal to "© 2016 Vimeo, Inc."
      And Text of #"8" element of "ItunesCameoPage > Categories" collection should be equal to "Free"
