class PinCode{

    constructor(...params){
        this.pin = params[0]
    }

    get pin(){
        return this._pin;
    }
    set pin(pin){
        let pinRegex = RegExp('[0-9]{6}')
        if(pinRegex.test(pin)){
            this._pin = pin;
        }
        else throw "Incorrect Pin"
    }
}


try{
    let pincode = new PinCode(453001)
    let pincode1 = new PinCode(48731)
    console.log(pincode)
    console.log(pincode1)
}catch(e){
    console.log("Error :  " + e)
}