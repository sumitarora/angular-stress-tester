import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2338Component } from './comp-2338.component';

describe('Comp2338Component', () => {
  let component: Comp2338Component;
  let fixture: ComponentFixture<Comp2338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
