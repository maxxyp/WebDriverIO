var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^I am on the home page$/, function () {
        browser.url('/index.php')
    });

    Given(/^I click the sign in link$/, function () {
        const signIn = $('a[title=\'Log in to your customer account\']')
        signIn.click();
    });

    Given(/^I enter email "([^"]*)" in the email field$/, function (myemail) {
       const email = $('#email')
        email.setValue(myemail)
    });

    Given(/^I enter password "([^"]*)" in the password field$/, function (mypassword) {
        const password = $('#passwd')
        password.setValue(mypassword)
        browser.pause(1000)
    });

    When(/^I click the login button$/, function () {
        const loginBtn = $('button#SubmitLogin > span');
        loginBtn.click()
        browser.pause(2000)
    });

    Then(/^I should be logged in$/, function (callback) {
        callback.pending();
    });

    Then(/^I sign out$/, function () {
        const signoutLink = $('a[title=\'Log me out\']');
        signoutLink.click()
        browser.pause(2000)
    });

    Then(/^I verify "([^"]*)" on my detail page$/, function (expectedName) {
       const actualName = $('a[title=\'View my customer account\'] > span').getText();
       console.log(actualName);
       expect(expectedName).to.equal(actualName); // Chai assertion

       // expectChai('Welcome to your account. Here you can manage all of your personal information and orders.', expectedMessage)

    });
    Then(/^I see an error "([^"]*)" message details$/, function (ExpectedErrorMessage) {
        const actualErrorMessage = $('div#center_column li').getText();
        expect(ExpectedErrorMessage).to.equal(actualErrorMessage); // Chai assertion

    });

    Given(/^I click the forgot password link$/, function () {
        const forgotPsw = $('a[title=\'Recover your forgotten password\']');
        forgotPsw.click()
    });
    When(/^I click on retrieve password button$/, function () {
        const retriveBtn = $('.submit span');
        retriveBtn.click()
    });
    Then(/^I get a successful message "([^"]*)" displayed$/, function (ExpectedErrorMessage) {
        const actualMessage = $('.alert.alert-success').getText();
        console.log(actualMessage);
        expectChai(ExpectedErrorMessage, actualErrorMessage)
    });
});
