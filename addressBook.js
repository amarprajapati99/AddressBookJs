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
}
console.log('Welcome to address book ')