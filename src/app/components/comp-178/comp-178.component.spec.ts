import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp178Component } from './comp-178.component';
import { Service178Service } from '../../services/service-178.service';

describe('Comp178Component', () => {
  let component: Comp178Component;
  let fixture: ComponentFixture<Comp178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp178Component ],
providers: [Service178Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
