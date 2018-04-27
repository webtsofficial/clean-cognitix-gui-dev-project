import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressTableComponent } from './user-address-table.component';

describe('UserAddressTableComponent', () => {
  let component: UserAddressTableComponent;
  let fixture: ComponentFixture<UserAddressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressTableComponent);
    component = fixture.componentInstance;
    component.userAddress = {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
        }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
