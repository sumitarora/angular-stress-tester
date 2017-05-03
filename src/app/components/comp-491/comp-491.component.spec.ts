import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp491Component } from './comp-491.component';
import { Service491Service } from '../../services/service-491.service';

describe('Comp491Component', () => {
  let component: Comp491Component;
  let fixture: ComponentFixture<Comp491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp491Component ],
providers: [Service491Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
