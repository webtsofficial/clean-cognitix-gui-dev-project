// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {AgmCoreModule} from '@agm/core';
// Components
import {AppComponent} from './app.component';
import { UserOverviewComponent } from './components/sites/user-overview/user-overview.component';

// Services
import {UsersService} from './services/users/users.service';
import {AlbumsService} from './services/albums/albums.service';
import {PhotosService} from './services/photos/photos.service';
import { UserCardComponent } from './components/general/user/user-card/user-card.component';
import { UserDetailsTabsComponent } from './components/general/user/user-details-tabs/user-details-tabs.component';
import { UserAddressTableComponent } from './components/general/user/user-address-table/user-address-table.component';
import { GeoLocationComponent } from './components/general/map/geo-location/geo-location.component';
import {CommonModule} from '@angular/common';
import { UserCompanyComponent } from './components/general/user/user-company/user-company.component';

// Pipes

// Global Const
export const APIURL = 'https://jsonplaceholder.typicode.com';

@NgModule({
    declarations: [
        AppComponent,
        // Sites
        UserOverviewComponent,
        UserCardComponent,
        UserDetailsTabsComponent,
        UserAddressTableComponent,
        GeoLocationComponent,
        UserCompanyComponent
        // General
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        LazyLoadImageModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD7C7TiBDUEczB86xK7XxBbACDTzVxXhLs'
        })
    ],
    providers: [
        UsersService,
        AlbumsService,
        PhotosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
