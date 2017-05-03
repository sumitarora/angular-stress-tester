import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp409Component } from './comp-409.component';
import { Service409Service } from '../../services/service-409.service';

describe('Comp409Component', () => {
  let component: Comp409Component;
  let fixture: ComponentFixture<Comp409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp409Component ],
providers: [Service409Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
