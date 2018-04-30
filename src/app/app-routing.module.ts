import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {UserOverviewComponent} from './components/sites/user-overview/user-overview.component';
import {UserAlbumsComponent} from './components/sites/user-albums/user-albums.component';
import {UserPhotosComponent} from './components/sites/user-photos/user-photos.component';

const routes: Routes = [
    {
        path: '',
        children: [],
        component: UserOverviewComponent,
        data: {title: 'User Overview'}
    },
    {
        path: 'albums/:userId',
        children: [],
        component: UserAlbumsComponent,
        data: {title: 'Albums Overview'}
    },
    {
        path: 'photos/:userId',
        children: [],
        component: UserPhotosComponent,
        data: {title: 'Albums Overview'}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
