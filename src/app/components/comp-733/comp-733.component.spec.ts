import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp733Component } from './comp-733.component';
import { Service733Service } from '../../services/service-733.service';

describe('Comp733Component', () => {
  let component: Comp733Component;
  let fixture: ComponentFixture<Comp733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp733Component ],
providers: [Service733Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
