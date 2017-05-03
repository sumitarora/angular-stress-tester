import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp541Component } from './comp-541.component';
import { Service541Service } from '../../services/service-541.service';

describe('Comp541Component', () => {
  let component: Comp541Component;
  let fixture: ComponentFixture<Comp541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp541Component ],
providers: [Service541Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
