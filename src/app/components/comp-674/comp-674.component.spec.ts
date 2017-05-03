import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp674Component } from './comp-674.component';
import { Service674Service } from '../../services/service-674.service';

describe('Comp674Component', () => {
  let component: Comp674Component;
  let fixture: ComponentFixture<Comp674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp674Component ],
providers: [Service674Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
