import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp273Component } from './comp-273.component';
import { Service273Service } from '../../services/service-273.service';

describe('Comp273Component', () => {
  let component: Comp273Component;
  let fixture: ComponentFixture<Comp273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp273Component ],
providers: [Service273Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
