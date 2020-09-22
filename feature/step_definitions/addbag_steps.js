var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    When(/^I add Item to bag$/, function () {
        const addBagBtn = $('p#add_to_cart  span')
        addBagBtn.click()
        browser.pause(2000)
    });
    Then(/^I verify that Item is added to bag$/, function () {
        const itemAddedToBag = $('a[title=\'View my shopping cart\'] > .ajax_cart_product_txt.unvisible')
        itemAddedToBag.isDisplayed()
    });
});
