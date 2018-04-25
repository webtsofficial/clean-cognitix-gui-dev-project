import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {APIURL} from '../../app.module';
import {User} from '../../models/User';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        const url = APIURL + '/users/';
        return this.http.get<User[]>(url).map(
            users => users as User[]
        );
    }

    getUser(id: number) {
        const url = APIURL + '/users/' + id;
        return this.http.get<User>(url).map(
            user => user as User
        );
    }


    filterUsersById(id: number, users: User[]): User {
        return users.filter(user => user.id === id)[0];
    }

}
