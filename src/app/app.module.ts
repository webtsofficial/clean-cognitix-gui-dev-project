// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image';
// Components
import {AppComponent} from './app.component';
import { UserOverviewComponent } from './components/sites/user-overview/user-overview.component';

// Services
import {UsersService} from './services/users/users.service';
import {AlbumsService} from './services/albums/albums.service';
import {PhotosService} from './services/photos/photos.service';

// Pipes

// Global Const
export const APIURL = 'https://jsonplaceholder.typicode.com';

@NgModule({
    declarations: [
        AppComponent,
        // Sites
        UserOverviewComponent
        // General
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        LazyLoadImageModule
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
