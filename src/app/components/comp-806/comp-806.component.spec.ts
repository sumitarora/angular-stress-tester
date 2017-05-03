import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp806Component } from './comp-806.component';
import { Service806Service } from '../../services/service-806.service';

describe('Comp806Component', () => {
  let component: Comp806Component;
  let fixture: ComponentFixture<Comp806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp806Component ],
providers: [Service806Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
