import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp191Component } from './comp-191.component';
import { Service191Service } from '../../services/service-191.service';

describe('Comp191Component', () => {
  let component: Comp191Component;
  let fixture: ComponentFixture<Comp191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp191Component ],
providers: [Service191Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
