import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp93Component } from './comp-93.component';
import { Service93Service } from '../../services/service-93.service';

describe('Comp93Component', () => {
  let component: Comp93Component;
  let fixture: ComponentFixture<Comp93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp93Component ],
providers: [Service93Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
