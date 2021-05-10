/* @Description - create contacts class and create constructor to used the this keyword
 *for the initializing the instances set value with the possition */

class Contact {

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
        let firstNameRegex = /'^[A-Z]{1}[a-z]{2,}+$'/;
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    /* @Description - to validate last name should start with captital character
    * to used throw keyword for the invalid last name */

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = /^[A-Za-z]+$/;
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

/* @Description - to create a new address book array and add new contacts 
 * to added new details for contact person using their name and edit it
 * used to slice method to delete contact by using person name  */

try {
    let detailsArray = new Array();
    detailsArray.push(new Contact('Amar', 'Mishra', 'RamNagar', 'Ambedhkar', 'Up', '223 223',
        '91 8052696969', 'jay@gmail.com'));
    detailsArray.push(new Contact('Ravi', 'Mishra', 'RamNagar', 'Ambedhkar', 'Up', '223 223',
        '91 9452696969', 'ravi@gmail.com'));
    detailsArray.push(new Contact('Rakesh', 'Mishra', 'RamNagar', 'Ambedhkar', 'Up', '223 223',
        '91 8452696969', 'rkprajapati@gmail.com'));

    console.log('contacts before being updated \n');
    detailsArray.forEach((contact) => console.log(contact.toString()));

    detailsArray.filter(contact => contact.firstName == 'Ravi').map(contact => contact.firstName = "Bahubali");
    console.log('contacts after being updated \n');
    detailsArray.forEach((contact) => console.log(contact.toString()));

    let index = detailsArray.findIndex(contact => contact.firstName = 'Rakesh');
    detailsArray.slice(index, 1);
    console.log('address book after deleting contact ');
    detailsArray.forEach((contact) => console.log(contact.toString()));

    /* @Description - declear function and return count value if the codition failed the increase the count
     * value.
     * by using reduce method to count the number of contact which is present is array*/

    let count = 0;
    function findNumberOfContacts(contact) {
        if (contact != null)
            return count++;
    }
    detailsArray.reduce(findNumberOfContacts, 0);
    console.log(' Total number of contacts in array  : ' + count);
    let newContact = new Contact("Surah", 'Verma', "Prayagraj", 'Alahabad', 'Up',
        "903 678", "91 8054564556", "spverma.sep@gmail.com");

    function checkDuplicates(count, contact) {
        if (contact != null)
            count++;
        return count;
    }

    function addContact() {
        if (countDuplicate == 0) detailsArray.push(newContact);
        else console.log("\nContact not added in the address book. Duplicate Entry found.\n");
    }

    let countDuplicate = detailsArray.filter(contact => contact.firstName == newContact.firstName)
    .map(contact => contact).reduce(checkDuplicates, 0);

    addContact();

    console.log('Checking duplicate while adding new contact in the address book ');
    detailsArray.forEach((contact) => console.log(contact.toString()));

     /* @Description - declear a function and pass the two parameter countByCity and contact which is count 
      * number of person.
      * @Return - countByCIty  */

     function countPersonByCity(countByCity, contact) {
        if (contact != null)
            countByCity++;
        return countByCity;
    }

    /* @Descreption - search  city by person name which is persent in side contact  */

    function searchByCity() {
        if (searchByCity == 0) console.log('Search not found by city name ' + searchCity);
        else console.log("\n" + searchByCity + ' Search found by city name ' + searchCity);
    }
    let searchCity = 'Ambedhkar';
    let searchByCity = detailsArray.filter(contact => contact.city == searchCity).map(contact => contact).reduce(countPersonByCity, 0);
    searchByCity();

     /* @Descreption - search  state by  name which is persent in side contact  */

    function countPersonByCity(countByState, contact) {
        if (contact != null)
            countByState++;
        return countByState;
    }
    function searchByState() {
        if (serchByState == 0) console.log('Search not found by state name ' + searchState);
        else console.log('\n '+ serchByState + ' Search found by state name ' + searchState);
    }
    let searchState = 'Uttar Pradesh';
    let serchByState = detailsArray.filter(contact => contact.state == searchState).map(contact => contact).reduce(countPersonByCity, 0);
    searchByState();

    /*@Description - view person by city or state */

    let contactCity = "Vadodara";
    let contactState = "Maharashtra";
    let contactByCityArray = detailsArray.filter(contact => contact.city == contactCity).map(contact => contact);
    contactByCityArray.forEach(contact => console.log(contact.toString()))
    let contactByStateArray = detailsArray.filter(contact => contact.state == contactState).map(contact => contact);
    contactByStateArray.forEach(contact => console.log(contact.toString()));

    /* @Description -  get the number of contact person i.e count by city or state */

    function countContacts(counter, contact) {
        if (contact !== null)
            counter++;
        return counter;
    }
    let countByCity = detailsArray.filter(contact => contact.city !== null).map(contact => contact).reduce(countContacts, 0);
    console.log("Count by City " + countByCity);
    let countByState = detailsArray.filter(contact => contact.state !== null).map(contact => contact).reduce(countContacts, 0);
    console.log("Count by City " + countByState);

    /* @Description - to sort the entries in the address book alphabetically by
     * person’s name */ 

    function sortByName() {
        for (let details in detailsArray) {
            detailsArray.sort(details.firstName);
        }
        detailsArray.forEach(contact => console.log(contact.toString()));
    }
    console.log("Sorting by firstName");
    sortByName();
    
}

catch (e) {
    console.log('Regex test is fail \n' + e);
}