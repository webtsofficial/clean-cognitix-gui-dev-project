import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {UserAlbumsComponent} from './user-albums.component';
import {UsersService} from '../../../services/users/users.service';
import {AlbumsService} from '../../../services/albums/albums.service';
import {PhotosService} from '../../../services/photos/photos.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../models/User';
import {Album} from '../../../models/Album';
import {Photo} from '../../../models/Photo';
import {ActivatedRoute} from '@angular/router';

describe('UserAlbumsComponent', () => {
    let component: UserAlbumsComponent;
    let fixture: ComponentFixture<UserAlbumsComponent>;
    const fakeActivatedRoute = {
        snapshot: { data: {}}
    } as ActivatedRoute;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            declarations: [UserAlbumsComponent],
            providers: [
                UsersService,
                AlbumsService,
                PhotosService,
                {
                    provide: ActivatedRoute,
                    useValue: fakeActivatedRoute
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAlbumsComponent);
        component = fixture.componentInstance;
        component.userId = 1;
        component.user$ = new Observable<User>();
        component.albums$ = new Observable<Album[]>();
        component.photos$ = new Observable<Photo[]>();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
