Feature: Register User

  Background:
    Given I am on the home page
    And I click the sign in link

  @Register
  Scenario: As a new user I want to create an account
    And I enter email in the email field
    And I click create new account button
    And I click male gender
    And I enter first name in the name field
    And I enter last name in the name field
    And I enter password "Today01"
    And I enter DOB Day "1" Month "7" Year "1986"
    And I enter Address details "Max Ltd" address "1" line "Park Road" city "Chicago" state "Illinois" zip "24378"
    And I enter Mobile Phone number "0794 8769 251"
    When I click the Register button
#    Then I am registered and logged in automatically
    And I sign out

