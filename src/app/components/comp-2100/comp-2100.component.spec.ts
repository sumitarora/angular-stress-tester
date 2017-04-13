import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2100Component } from './comp-2100.component';

describe('Comp2100Component', () => {
  let component: Comp2100Component;
  let fixture: ComponentFixture<Comp2100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
