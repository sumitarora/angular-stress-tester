import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3417Component } from './comp-3417.component';

describe('Comp3417Component', () => {
  let component: Comp3417Component;
  let fixture: ComponentFixture<Comp3417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
