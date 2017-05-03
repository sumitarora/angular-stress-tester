import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp276Component } from './comp-276.component';
import { Service276Service } from '../../services/service-276.service';

describe('Comp276Component', () => {
  let component: Comp276Component;
  let fixture: ComponentFixture<Comp276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp276Component ],
providers: [Service276Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
