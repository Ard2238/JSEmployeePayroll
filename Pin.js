class PinCode{

    constructor(...params){
        this.pin = params[0]
    }

    get pin(){
        return this._pin;
    }
    set pin(pin){
        let letterRegex = RegExp('^[^a-zA-z]+$')
        let splRegex = RegExp('^[!@#$^&%*()+=-[]\/{}|:<>?,.]+$')
        let pinRegex = RegExp('^[0-9]{6}$')
        if(letterRegex.test(pin)&& !splRegex.test(pin) && pinRegex.test(pin)){
            this._pin = pin;
        }
        else throw "Incorrect Pin"
    }
}


try{
    let pincode = new PinCode(453001)
    console.log(pincode)
    let pincode1 = new PinCode("400088B")
    console.log(pincode1)
    let pincode2 = new PinCode("400088@")
    console.log(pincode2)
}catch(e){
    console.log("Error :  " + e)
}