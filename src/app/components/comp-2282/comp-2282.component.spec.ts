import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2282Component } from './comp-2282.component';

describe('Comp2282Component', () => {
  let component: Comp2282Component;
  let fixture: ComponentFixture<Comp2282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
