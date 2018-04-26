import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {UserOverviewComponent} from './user-overview.component';
import {UsersService} from '../../../services/users/users.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserOverviewComponent', () => {
    let component: UserOverviewComponent;
    let fixture: ComponentFixture<UserOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [UserOverviewComponent],
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
