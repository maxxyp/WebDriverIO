const homepage = require('..\\pageobjects\\homePage');
const loginpage = require('..\\pageobjects\\loginPage');

describe('Login', () => {
    it.skip('Check that user can login successfully', () => {
        browser.url('/index.php')
        expect(browser).toHaveTitle('My Store');
        homepage.signIn();
        browser.pause(3000);
        loginpage.login('maxtest433@gmail.com', 'Friday24');

    })
})
