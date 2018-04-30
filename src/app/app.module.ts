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
import { SearchInputComponent } from './components/general/form/search-input/search-input.component';

// Pipes
import { FilterUserByNamePipe } from './pipes/user/filter-user-by-name/filter-user-by-name.pipe';
import { AlbumButtonComponent } from './components/general/buttons/album-button/album-button.component';
import { PhotosButtonComponent } from './components/general/buttons/photos-button/photos-button.component';
import { UserAlbumsComponent } from './components/sites/user-albums/user-albums.component';
import { UserPhotosComponent } from './components/sites/user-photos/user-photos.component';
import { AlbumCardComponent } from './components/general/albums/album-card/album-card.component';
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
        UserCompanyComponent,
        SearchInputComponent,
        // Pipes
        FilterUserByNamePipe,
        AlbumButtonComponent,
        PhotosButtonComponent,
        UserAlbumsComponent,
        UserPhotosComponent,
        AlbumCardComponent
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
