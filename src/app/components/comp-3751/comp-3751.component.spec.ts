import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3751Component } from './comp-3751.component';

describe('Comp3751Component', () => {
  let component: Comp3751Component;
  let fixture: ComponentFixture<Comp3751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
