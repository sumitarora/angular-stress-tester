import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp143Component } from './comp-143.component';
import { Service143Service } from '../../services/service-143.service';

describe('Comp143Component', () => {
  let component: Comp143Component;
  let fixture: ComponentFixture<Comp143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp143Component ],
providers: [Service143Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
