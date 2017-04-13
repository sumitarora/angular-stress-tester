import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3299Component } from './comp-3299.component';

describe('Comp3299Component', () => {
  let component: Comp3299Component;
  let fixture: ComponentFixture<Comp3299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
