import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp423Component } from './comp-423.component';
import { Service423Service } from '../../services/service-423.service';

describe('Comp423Component', () => {
  let component: Comp423Component;
  let fixture: ComponentFixture<Comp423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp423Component ],
providers: [Service423Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
