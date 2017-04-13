import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2791Component } from './comp-2791.component';

describe('Comp2791Component', () => {
  let component: Comp2791Component;
  let fixture: ComponentFixture<Comp2791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
