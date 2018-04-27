import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {PhotosButtonComponent} from './photos-button.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('PhotosButtonComponent', () => {
    let component: PhotosButtonComponent;
    let fixture: ComponentFixture<PhotosButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [PhotosButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotosButtonComponent);
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
        expect(href).toEqual('/photos/1');
    });
});
