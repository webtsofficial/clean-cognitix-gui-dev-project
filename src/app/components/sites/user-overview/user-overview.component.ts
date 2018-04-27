import {
    Component,
    OnInit
} from '@angular/core';
import {User} from '../../../models/User';
import {Observable} from 'rxjs/Observable';
import {UsersService} from '../../../services/users/users.service';

@Component({
    selector: 'app-user-overview',
    templateUrl: './user-overview.component.html',
    styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

    users$: Observable<User[]>;
    userSearchName: string;

    constructor(private users: UsersService) {
        this.users$ = this.users.getUsers();
    }

    ngOnInit() {
    }

    changeSearchName(searchName: string) {
        this.userSearchName = searchName;
    }


}
