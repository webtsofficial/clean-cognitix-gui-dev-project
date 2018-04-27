import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-user-details-tabs',
  templateUrl: './user-details-tabs.component.html',
  styleUrls: ['./user-details-tabs.component.scss']
})
export class UserDetailsTabsComponent implements OnInit {
  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
