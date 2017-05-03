import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp200Component } from './comp-200.component';
import { Service200Service } from '../../services/service-200.service';

describe('Comp200Component', () => {
  let component: Comp200Component;
  let fixture: ComponentFixture<Comp200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp200Component ],
providers: [Service200Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
