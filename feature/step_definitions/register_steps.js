var faker = require('faker');
var {defineSupportCode} = require('cucumber');

var randomFirstName = faker.name.firstName(); // Rowan
var randomLastName = faker.name.lastName(); // Luke
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^I enter email in the email field$/, function () {
        const createEmail = $('#email_create')
        createEmail.setValue(randomEmail);
    });
    Given(/^I click create new account button$/, function () {
        const creatAccountBtn = $('#SubmitCreate > span')
        creatAccountBtn.click();
        browser.pause(3000);
    });
    Given(/^I click male gender$/, function () {
        const genderBtn = $('#id_gender1')
        genderBtn.click();
    });
    Given(/^I enter first name in the name field$/, function () {
        const firstName = $('#customer_firstname')
        firstName.setValue(randomFirstName);
    });
    Given(/^I enter last name in the name field$/, function () {
        const lastName = $('#customer_lastname')
        lastName.setValue(randomLastName);
    });
    Given(/^I check that email address in pre\-populated$/, function () {
        const emailInput = $('input#email')
        console.log(emailInput.getText())
        // emailInput.getText()
    });
    Given(/^I enter password "([^"]*)"$/, function (psw) {
        const password = $('#passwd')
        password.setValue(psw);
    });

    Given(/^I enter DOB Day "([^"]*)" Month "([^"]*)" Year "([^"]*)"$/, function (DD, MM, YYYY,) {
        const selectDay = $('#days');
        const selectMonths = $('#months');
        const selectYears = $('#years');

        selectDay.selectByAttribute('value', DD);
        selectMonths.selectByAttribute('value', MM);
        selectYears.selectByAttribute('value', YYYY);

    });

    Given(/^I enter Address details "([^"]*)" address "([^"]*)" line "([^"]*)" city "([^"]*)" state "([^"]*)" zip "([^"]*)"$/, function (comp, add1, add2, city, state, postcode) {
        const company = $('#company')
        const address1 = $('#address1')
        const address2 = $('#address2')
        const mycity = $('#city')
        const mystate = $('#id_state');
        const mypostcode =$('#postcode')

        company.setValue(comp);
        address1.setValue(add1)
        address2.setValue(add2)
        mycity.setValue(city)
        mystate.selectByVisibleText(state);
        // mystate.selectByAttribute('value', state);
        browser.pause(1000)
        mypostcode.setValue(postcode);
        browser.pause(1000)
    });

    Given(/^I enter Mobile Phone number "([^"]*)"$/, function (number) {
        const phoneNumber =$('#phone_mobile')
        phoneNumber.setValue(number)
    });
    When(/^I click the Register button$/, function () {
        const registerBtn =$('#submitAccount > span')
        registerBtn.click()
        browser.pause(3000)

    });
    Then(/^I am registered and logged in automatically$/, function (callback) {
        const registerSuccess = $('#center_column > p')
    });
});
