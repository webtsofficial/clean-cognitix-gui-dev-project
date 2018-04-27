import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {GeoLocationComponent} from './geo-location.component';
import {AgmCoreModule} from '@agm/core';

describe('GeoLocationComponent', () => {
    let component: GeoLocationComponent;
    let fixture: ComponentFixture<GeoLocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyD7C7TiBDUEczB86xK7XxBbACDTzVxXhLs'
                })
            ],
            declarations: [GeoLocationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GeoLocationComponent);
        component = fixture.componentInstance;
        component.geoLocation = {
            'lat': '-37.3159',
            'lng': '81.1496'
        };
        component.lat = parseInt(component.geoLocation.lat, 10);
        component.lng = parseInt(component.geoLocation.lng, 10);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
