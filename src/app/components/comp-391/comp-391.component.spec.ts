import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp391Component } from './comp-391.component';
import { Service391Service } from '../../services/service-391.service';

describe('Comp391Component', () => {
  let component: Comp391Component;
  let fixture: ComponentFixture<Comp391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp391Component ],
providers: [Service391Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
