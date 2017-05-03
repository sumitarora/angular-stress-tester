import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp313Component } from './comp-313.component';
import { Service313Service } from '../../services/service-313.service';

describe('Comp313Component', () => {
  let component: Comp313Component;
  let fixture: ComponentFixture<Comp313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp313Component ],
providers: [Service313Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
