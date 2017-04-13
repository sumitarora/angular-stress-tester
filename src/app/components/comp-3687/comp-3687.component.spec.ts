import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3687Component } from './comp-3687.component';

describe('Comp3687Component', () => {
  let component: Comp3687Component;
  let fixture: ComponentFixture<Comp3687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
