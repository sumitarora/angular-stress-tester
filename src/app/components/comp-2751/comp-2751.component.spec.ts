import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2751Component } from './comp-2751.component';

describe('Comp2751Component', () => {
  let component: Comp2751Component;
  let fixture: ComponentFixture<Comp2751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
