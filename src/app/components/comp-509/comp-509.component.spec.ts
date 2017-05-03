import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp509Component } from './comp-509.component';
import { Service509Service } from '../../services/service-509.service';

describe('Comp509Component', () => {
  let component: Comp509Component;
  let fixture: ComponentFixture<Comp509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp509Component ],
providers: [Service509Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
