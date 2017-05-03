import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp751Component } from './comp-751.component';
import { Service751Service } from '../../services/service-751.service';

describe('Comp751Component', () => {
  let component: Comp751Component;
  let fixture: ComponentFixture<Comp751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp751Component ],
providers: [Service751Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
