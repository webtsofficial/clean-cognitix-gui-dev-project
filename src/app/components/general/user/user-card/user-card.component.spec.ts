import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {UserCardComponent} from './user-card.component';
import {User} from '../../../../models/User';

describe('UserCardComponent', () => {
    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('changeActiveUser() shoultd emit User object', () => {

        const userObj = {
                'id': 1,
                'name': 'Leanne Graham',
                'username': 'Bret',
                'email': 'Sincere@april.biz',
                'address': {
                    'street': 'Kulas Light',
                    'suite': 'Apt. 556',
                    'city': 'Gwenborough',
                    'zipcode': '92998-3874',
                    'geo': {
                        'lat': '-37.3159',
                        'lng': '81.1496'
                    }
                },
                'phone': '1-770-736-8031 x56442',
                'website': 'hildegard.org',
                'company': {
                    'name': 'Romaguera-Crona',
                    'catchPhrase': 'Multi-layered client-server neural-net',
                    'bs': 'harness real-time e-markets'
                }
            },
            dummyUser: User = new User(userObj);

        component.activeUser.subscribe(activeUser => {
            expect(activeUser).toEqual(userObj);
        });
        component.changeActiveUser(userObj);
    });
});
