import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4751Component } from './comp-4751.component';

describe('Comp4751Component', () => {
  let component: Comp4751Component;
  let fixture: ComponentFixture<Comp4751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
