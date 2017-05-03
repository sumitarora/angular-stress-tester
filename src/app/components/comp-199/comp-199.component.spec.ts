import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp199Component } from './comp-199.component';
import { Service199Service } from '../../services/service-199.service';

describe('Comp199Component', () => {
  let component: Comp199Component;
  let fixture: ComponentFixture<Comp199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp199Component ],
providers: [Service199Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
