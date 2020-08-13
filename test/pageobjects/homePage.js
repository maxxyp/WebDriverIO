class homePage{

    get signInBtn (){return $('a[title=\'Log in to your customer account\']') }


//method to interact with sign in link
    signIn (){
       this.signInBtn.click();
    }
}

module.exports = new homePage();
