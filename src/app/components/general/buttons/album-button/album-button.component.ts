import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-album-button',
    templateUrl: './album-button.component.html',
    styleUrls: ['./album-button.component.scss']
})
export class AlbumButtonComponent implements OnInit {

    @Input() userId: number;

    constructor() {
    }

    ngOnInit() {
    }

}
