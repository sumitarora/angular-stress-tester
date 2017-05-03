import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp84Component } from './comp-84.component';
import { Service84Service } from '../../services/service-84.service';

describe('Comp84Component', () => {
  let component: Comp84Component;
  let fixture: ComponentFixture<Comp84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp84Component ],
providers: [Service84Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
