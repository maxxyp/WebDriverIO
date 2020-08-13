class loginPage{

    //Locator Identifiers
   get myEmail () {return $('#email')}
   get myPassword () {return $('#passwd') }
   get loginInBtn () {return $('#SubmitLogin')}
   get signOut () {return $('#header > div.nav > div > div > nav > div:nth-child(2) > a') }


   //method declaration
   login(email, password){
       this.myEmail.setValue(email)
       this.myPassword.setValue(password)
       this.loginInBtn.click()
   }
}

module.exports = new loginPage();
