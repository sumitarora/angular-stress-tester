import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3338Component } from './comp-3338.component';

describe('Comp3338Component', () => {
  let component: Comp3338Component;
  let fixture: ComponentFixture<Comp3338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
