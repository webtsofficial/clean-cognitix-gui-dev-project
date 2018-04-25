import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {UserOverviewComponent} from './components/sites/user-overview/user-overview.component';

const routes: Routes = [
    {
        path: '',
        children: [],
        component: UserOverviewComponent,
        data: {title: 'User Overview'}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
