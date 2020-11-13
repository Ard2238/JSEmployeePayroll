class Email{

    constructor(...params){
        this.mail = params[0]
    }

    get mail(){
        return this._mail;
    }
    set mail(mail){
        let partOneRegex = RegExp('^[a-z]+[@][a-z0-9]+$')
        if(partOneRegex.test(mail)){
            this._mail = mail;
        }
        else throw "Incorrect Email"
    }
}


try{
    let email1 = new Email("abhishek@gmail1")
    console.log(email1)
    let email2 = new Email("Abhishek")
    console.log(email2)
}catch(e){
    console.log("Error :  " + e)
}