import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp18Component } from './comp-18.component';
import { Service18Service } from '../../services/service-18.service';

describe('Comp18Component', () => {
  let component: Comp18Component;
  let fixture: ComponentFixture<Comp18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp18Component ],
providers: [Service18Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
