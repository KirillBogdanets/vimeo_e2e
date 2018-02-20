Feature: Mobile Test

  @mobile
  @login_in_mobile_app
  Scenario: Verify that user can login in mobile app
    Given I wait 4 seconds
    Then I click "VimeoMobileHomePage > MobileTopMenuOpenButton" element
      And I wait 2 seconds
    Then I click "VimeoMobileHomePage > MobileLoginButtonButton" element
    When I wait until "VimeoMobileLoginPage > VimeoLogo" element is visible
    Then I click "VimeoMobileLoginPage > VimeoLogo" element
      And I wait 2 seconds
      And "VimeoMobileLoginPage > LogInContainerButton" element should be in viewport
      And Text of "VimeoMobileLoginPage > LogInContainerButton" element should be equal to "Log in" ignoring case
    When I open "https://vimeo.com/log_in?ssl=0&iframe=0&popup=0&player=0&product_id=0&activate=0" url
      And I wait until "VimeoMobileLoginPage > VimeoLogo" element is visible
      And "VimeoMobileLoginPage > LoginContainer" element should be visible
    When I enter "bogdanetskirill@gmail.com" text into "VimeoMobileLoginPage > EmailInputInLoginContainer" element
    Then I enter "qweasdzxc123" text into "VimeoMobileLoginPage > PasswordInputInLoginContainer" element
      And I click "VimeoMobileLoginPage > LogInButtonInLoginContainer" element
      And I wait 4 seconds