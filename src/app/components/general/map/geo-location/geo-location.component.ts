import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {GeoLocation} from '../../../../models/Geo';

@Component({
    selector: 'app-geo-location',
    templateUrl: './geo-location.component.html',
    styleUrls: ['./geo-location.component.scss']
})
export class GeoLocationComponent implements OnInit {

    @Input() geoLocation: GeoLocation;

    lat: number = null;
    lng: number = null;

    constructor() {}

    ngOnInit() {
        this.lat = parseInt(this.geoLocation.lat, 10);
        this.lng = parseInt(this.geoLocation.lng, 10);
    }

}
