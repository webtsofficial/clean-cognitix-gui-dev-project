import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {User} from '../../../../models/User';


@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input() user: User;
    userActive = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleUserActive(): void {
        this.userActive = !this.userActive;
    }

}
