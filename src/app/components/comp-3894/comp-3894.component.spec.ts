import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3894Component } from './comp-3894.component';

describe('Comp3894Component', () => {
  let component: Comp3894Component;
  let fixture: ComponentFixture<Comp3894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
