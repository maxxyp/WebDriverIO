Feature: Search for Items

  Background:
    Given I am on the home page

  @Search
  Scenario: As a user I want to search for an item and verify its description on the PDP page
    When I search for "dress" in the search input box
    Then I see product title "Printed Summer Dress"
