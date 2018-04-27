import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-photos-button',
  templateUrl: './photos-button.component.html',
  styleUrls: ['./photos-button.component.scss']
})
export class PhotosButtonComponent implements OnInit {

  @Input() userId: number;

  constructor() { }

  ngOnInit() {
  }

}
