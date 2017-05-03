import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp100Component } from './comp-100.component';
import { Service100Service } from '../../services/service-100.service';

describe('Comp100Component', () => {
  let component: Comp100Component;
  let fixture: ComponentFixture<Comp100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp100Component ],
providers: [Service100Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
