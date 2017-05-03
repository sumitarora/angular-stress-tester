import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp196Component } from './comp-196.component';
import { Service196Service } from '../../services/service-196.service';

describe('Comp196Component', () => {
  let component: Comp196Component;
  let fixture: ComponentFixture<Comp196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp196Component ],
providers: [Service196Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
