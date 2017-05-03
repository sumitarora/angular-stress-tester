import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp871Component } from './comp-871.component';
import { Service871Service } from '../../services/service-871.service';

describe('Comp871Component', () => {
  let component: Comp871Component;
  let fixture: ComponentFixture<Comp871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp871Component ],
providers: [Service871Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
