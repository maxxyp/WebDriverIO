var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^I search for "([^"]*)" in the search input box$/, function (item) {
        const searchBox = $('input#search_query_top')
        const selectFirstItem = $('.ac_results ul li:nth-of-type(1)')
        searchBox.setValue(item)
        browser.pause(3000);
        selectFirstItem.click()
        browser.pause(3000);
    });

    Then(/^I see product title "([^"]*)"$/, function (expectedTitle) {
        const actualTitle = $('h1').getText()
        console.log(actualTitle);
        expect(expectedTitle).to.equal(actualTitle); // Chai assertion
});
});
