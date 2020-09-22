Feature: Add To Bag

  Background:
    Given I am on the home page
    And I search for "dress" in the search input box
    And I see product title "Printed Summer Dress"

  @addToBag
  Scenario: As a user I want to add item to bag
    When I add Item to bag
    Then I verify that Item is added to bag
