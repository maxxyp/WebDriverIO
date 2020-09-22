Feature: Login

  Background:
    Given I am on the home page
    And I click the sign in link

  Scenario Outline: As a user I want to login successfully
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
    When I click the login button
    Then I verify "<expectedName>" on my detail page
    And I sign out

    Examples:
      | myemail            | mypassword   | expectedName |
      | laura@gmail.com    | Today001     | Laura Davies |
      | Smith530@gmail.com | Sunday001    | Smith Mike   |

    Scenario Outline: As a user I want to see an error message when I login incorrectly
      And I enter email "<myemail>" in the email field
      And I enter password "<mypassword>" in the password field
      When I click the login button
      Then I see an error "<ExpectedErrorMessage>" message details

      Examples:
        | myemail              | mypassword|ExpectedErrorMessage      |
        | maxtest964@gmail.com |           |Password is required.     |
        |                      | Today1    |An email address required.|
        | maxtest964@gmail.com | Mario5    |Authentication failed.    |
        | mary2019@yahoo.com   | Today1    |Authentication failed.    |
        |                      |           |An email address required.|
