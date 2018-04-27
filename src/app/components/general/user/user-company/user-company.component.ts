import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {Company} from '../../../../models/Company';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent implements OnInit {

  @Input() userCompany: Company;

  constructor() { }

  ngOnInit() {
  }

}
