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

describe('UserOverviewComponent', () => {
    let component: UserOverviewComponent;
    let fixture: ComponentFixture<UserOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyD7C7TiBDUEczB86xK7XxBbACDTzVxXhLs'
                })
            ],
            declarations: [
                UserOverviewComponent,
                UserCardComponent,
                UserDetailsTabsComponent,
                UserAddressTableComponent,
                GeoLocationComponent
            ],
            providers: [UsersService]
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
});
