import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {UserOverviewComponent} from './user-overview.component';
import {UsersService} from '../../../services/users/users.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserCardComponent} from '../../general/user/user-card/user-card.component';
import {UserDetailsTabsComponent} from '../../general/user/user-details-tabs/user-details-tabs.component';
import {UserAddressTableComponent} from '../../general/user/user-address-table/user-address-table.component';
import {GeoLocationComponent} from '../../general/map/geo-location/geo-location.component';
import {AgmCoreModule} from '@agm/core';
import {UserCompanyComponent} from '../../general/user/user-company/user-company.component';
import {SearchInputComponent} from '../../general/form/search-input/search-input.component';
import {FilterUserByNamePipe} from '../../../pipes/user/filter-user-by-name/filter-user-by-name.pipe';
import {FormsModule} from '@angular/forms';
import {AlbumButtonComponent} from '../../general/buttons/album-button/album-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PhotosButtonComponent} from '../../general/buttons/photos-button/photos-button.component';
import {ActivatedRoute} from '@angular/router';

describe('UserOverviewComponent', () => {
    let component: UserOverviewComponent;
    let fixture: ComponentFixture<UserOverviewComponent>;
    const fakeActivatedRoute = {
        snapshot: { data: {} }
    } as ActivatedRoute;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyD7C7TiBDUEczB86xK7XxBbACDTzVxXhLs'
                }),
                FormsModule,
                RouterTestingModule
            ],
            declarations: [
                UserOverviewComponent,
                UserCardComponent,
                UserDetailsTabsComponent,
                UserAddressTableComponent,
                GeoLocationComponent,
                UserCompanyComponent,
                SearchInputComponent,
                AlbumButtonComponent,
                PhotosButtonComponent,
                FilterUserByNamePipe
            ],
            providers: [
                UsersService,
                {
                    provide: ActivatedRoute,
                    useValue: fakeActivatedRoute
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('changeSearchName(string) to filter user', () => {
        const searchTerm = 'search after this term';
        component.changeSearchName(searchTerm);
        expect(component.userSearchName).toBe(searchTerm);
    });
});
