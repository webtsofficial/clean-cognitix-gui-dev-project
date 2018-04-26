import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {User} from '../../../../models/User';


@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input() user: User;
    @Output() activeUser: EventEmitter<User> = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit() {
    }

    changeActiveUser(user: User): void {
        this.activeUser.emit(user);
    }

}
