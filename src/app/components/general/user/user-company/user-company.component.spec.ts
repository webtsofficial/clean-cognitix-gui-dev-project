import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyComponent } from './user-company.component';

describe('UserCompanyComponent', () => {
  let component: UserCompanyComponent;
  let fixture: ComponentFixture<UserCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanyComponent);
    component = fixture.componentInstance;
    component.userCompany = {
        'name': 'Deckow-Crist',
        'catchPhrase': 'Proactive didactic contingency',
        'bs': 'synergize scalable supply-chains'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
