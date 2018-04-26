import {Address} from './Address';
import {Company} from './Company';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(userObj) {
        this.id = userObj.id;
        this.name = userObj.name;
        this.username = userObj.username;
        this.email = userObj.email;
        this.address = userObj.address;
        this.phone = userObj.phone;
        this.website = userObj.website;
        this.company = userObj.company;
    }
}
