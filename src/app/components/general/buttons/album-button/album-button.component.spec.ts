import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {AlbumButtonComponent} from './album-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

describe('AlbumButtonComponent', () => {
    let component: AlbumButtonComponent;
    let fixture: ComponentFixture<AlbumButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AlbumButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumButtonComponent);
        component = fixture.componentInstance;
        component.userId = 1;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('let routerLink render correct url', () => {
        const href = fixture.debugElement.query(By.css('a')).nativeElement
            .getAttribute('href');
        expect(href).toEqual('/albums/1');
    });
});
