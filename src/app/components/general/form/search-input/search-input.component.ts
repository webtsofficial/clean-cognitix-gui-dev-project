import {
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();
  searchTermModel: string;

  constructor() {
    this.changeSearchTerm('');
  }

  ngOnInit() {
  }

  changeSearchTerm(searchterm: string) {
    this.searchTerm.emit(searchterm);
  }

}
