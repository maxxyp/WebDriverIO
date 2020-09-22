Feature: Forgot Password

  Scenario: As a user I want to reset my password
    Given I am on the home page
    And I click the sign in link
    And I click the forgot password link
    And I enter email "esther@gmail.com" in the email field
    When I click on retrieve password button
    Then I get a successful message "A confirmation email has been sent to your address: esther@gmail.com" displayed
