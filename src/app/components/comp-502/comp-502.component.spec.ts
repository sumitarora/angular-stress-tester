import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp502Component } from './comp-502.component';
import { Service502Service } from '../../services/service-502.service';

describe('Comp502Component', () => {
  let component: Comp502Component;
  let fixture: ComponentFixture<Comp502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp502Component ],
providers: [Service502Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
