export class RSVP {
    firstName: String;
    lastName: String;
    email?: String;
    response: String;
    table?: Boolean;

    constructor(firstName: String, lastName: String, response: String, email?: String, table?: Boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.response = response;
        this.email = email;
        this.table = table;
    }
}