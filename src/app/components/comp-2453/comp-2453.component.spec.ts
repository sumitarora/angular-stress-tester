import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2453Component } from './comp-2453.component';

describe('Comp2453Component', () => {
  let component: Comp2453Component;
  let fixture: ComponentFixture<Comp2453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
