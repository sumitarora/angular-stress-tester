import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp688Component } from './comp-688.component';
import { Service688Service } from '../../services/service-688.service';

describe('Comp688Component', () => {
  let component: Comp688Component;
  let fixture: ComponentFixture<Comp688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp688Component ],
providers: [Service688Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
