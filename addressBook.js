/* @Description - create contacts class and create constructor to used the this keyword
 *for the initializing the instances set value with the possition */

class Contact{

constructor(params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
    }

    /* @Description - to validate first name should start with captital character
     * to used throw keyword for the invalid first name */

    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

     /* @Description - to validate last name should start with captital character
     * to used throw keyword for the invalid last name */

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    /* @Description - to validate address should start with captital letters or small letters
     * to used throw keyword for the invalid address */

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

     /* @Description - to validate city should start with captital letters or small letters
     * to used throw keyword for the invalid city  */

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    /* @Description - to validate state should start with captital letters or small letters
     * to used throw keyword for the invalid state  */

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    /* @Description - to validate zip  should start with numbers 
     * to used throw keyword for the invalid state  */

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    /* @Description - to validate phone number should start with numbers to allow max 10 digit
     * to used throw keyword for the invalid phone number  */

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    /* @Description - to validate email id  should start with small letter to allow one number and one
     * special character. 
     * to used throw keyword for the invalid phone number  */

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + "\nZip: " + this.zip
            + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}

