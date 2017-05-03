import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp889Component } from './comp-889.component';
import { Service889Service } from '../../services/service-889.service';

describe('Comp889Component', () => {
  let component: Comp889Component;
  let fixture: ComponentFixture<Comp889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp889Component ],
providers: [Service889Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
