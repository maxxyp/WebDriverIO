//MOCHA FRAMEWORK
//DESCRIBE  ==> The area of the application I am focusing ON
//IT  ==> Test scenario

var faker = require('faker');
const expectChai = require('chai').expect;

describe('Register', () => {

    var randomFirstName = faker.name.firstName(); // Rowan
    var randomLastName = faker.name.lastName(); // Luke
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    it('Check that user can register successfully', () => {
        browser.url('/index.php')

        //Locator Identifiers
        const signIn = $('a[title=\'Log in to your customer account\']')
        const createEmail = $('#email_create')
        const creatAccountBtn = $('#SubmitCreate > span')
        const genderBtn = $('#id_gender1')
        const firstName = $('#customer_firstname')
        const lastName = $('#customer_lastname')
        const password = $('#passwd')
        const daysBtn = $('#days > option:nth-child(11)')
        const monthBtn = $('#months > option:nth-child(2)')
        const yearBtn = $('#years > option:nth-child(2)')
        const company = $('#company')
        const address1 = $('#address1')
        const city = $('#city')
        const state = $('#id_state > option:nth-child(12)')
        const postcode =$('#postcode')
        const phoneNumber =$('#phone_mobile')
        const registerBtn =$('#submitAccount > span')
        const registerSuccess = $('#center_column > p') ;

        signIn.click();
        createEmail.waitForDisplayed(3000);
        createEmail.setValue(randomEmail);
        creatAccountBtn.click();
        browser.pause(3000);
        genderBtn.click();
        firstName.setValue(randomFirstName);
        lastName.setValue(randomLastName);
        password.setValue('Upward!');
        daysBtn.click();
        monthBtn.click();
        yearBtn.click();
        company.setValue('Georgia University');
        address1.setValue('Georgia University');
        city.setValue('Atlanta');
        state.click();
        postcode.setValue('30302');
        phoneNumber.setValue('+1 404-413-2000');
        registerBtn.click();
        browser.pause(5000);
        const expectedMessage = registerSuccess.getText();
        console.log(expectedMessage);
        expectChai('Welcome to your account. Here you can manage all of your personal information and orders.', expectedMessage)


    })
})
