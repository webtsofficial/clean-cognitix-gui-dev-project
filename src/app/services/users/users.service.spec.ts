import {
    TestBed,
    inject,
    getTestBed
} from '@angular/core/testing';
import {UsersService} from './users.service';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import {User} from '../../models/User';
import {APIURL} from '../../app.module';

describe('UsersService', () => {
    let injector: TestBed,
        service: UsersService,
        httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        });
        injector = getTestBed();
        service = injector.get(UsersService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', inject([UsersService], () => {
        expect(service).toBeTruthy();
    }));

    it('getUsers() : Observable User[]', inject([UsersService], () => {
        const dummyUsers: User[] = [
            {
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
            {
                'id': 2,
                'name': 'Ervin Howell',
                'username': 'Antonette',
                'email': 'Shanna@melissa.tv',
                'address': {
                    'street': 'Victor Plains',
                    'suite': 'Suite 879',
                    'city': 'Wisokyburgh',
                    'zipcode': '90566-7771',
                    'geo': {
                        'lat': '-43.9509',
                        'lng': '-34.4618'
                    }
                },
                'phone': '010-692-6593 x09125',
                'website': 'anastasia.net',
                'company': {
                    'name': 'Deckow-Crist',
                    'catchPhrase': 'Proactive didactic contingency',
                    'bs': 'synergize scalable supply-chains'
                }
            }
        ];

        service.getUsers().subscribe(users => {
            expect(users.length).toBe(2);
            expect(users).toEqual(dummyUsers);
        });

        const req = httpMock.expectOne(APIURL + '/users/');
        expect(req.request.method).toBe('GET');
        req.flush(dummyUsers);
    }));

    it('getUser(id) : Observable User', inject([UsersService], () => {
        const dummyUser: User = {
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
            dummyId = 1;

        service.getUser(dummyId).subscribe(user => {
            expect(user).toEqual(dummyUser);
        });

        const req = httpMock.expectOne(APIURL + '/users/' + dummyId);
        expect(req.request.method).toBe('GET');
        req.flush(dummyUser);
    }));

    it('filterUsersById(id, users) : User', inject([UsersService], () => {
        const dummyId = 1,
              dummyUsers = [
                {
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
                }
            ],
              filteredUsers = service.filterUsersById(dummyId, dummyUsers);

        expect(filteredUsers).toEqual(dummyUsers[0]);
    }));
});