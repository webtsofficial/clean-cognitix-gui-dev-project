import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {Address} from '../../../../models/Address';

@Component({
  selector: 'app-user-address-table',
  templateUrl: './user-address-table.component.html',
  styleUrls: ['./user-address-table.component.scss']
})
export class UserAddressTableComponent implements OnInit {

  @Input() userAddress: Address;

  constructor() { }

  ngOnInit() {
  }

}
