class Email{

    constructor(...params){
        this.mail = params[0]
    }

    get mail(){
        return this._mail;
    }
    set mail(mail){
        let partOneRegex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(partOneRegex.test(mail)){
            this._mail = mail;
        }
        else throw "Incorrect Email"
    }
}


try{
    let email1 = new Email("abhishek@gmail1.com")
    console.log(email1)
    let email2 = new Email("abhishek.111@gmail.com.co")
    console.log(email2)
    // let email3 = new Email("Abhishek.@gmail.")
    // console.log(email3)
    // let email4 = new Email("abhishek.111@gmail.com.com")
    // console.log(email4)
    let email5 = new Email("abc@gmail.com.aa.au")
    console.log(email5)
}catch(e){
    console.log("Error :  " + e)
}