import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp208Component } from './comp-208.component';
import { Service208Service } from '../../services/service-208.service';

describe('Comp208Component', () => {
  let component: Comp208Component;
  let fixture: ComponentFixture<Comp208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp208Component ],
providers: [Service208Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
