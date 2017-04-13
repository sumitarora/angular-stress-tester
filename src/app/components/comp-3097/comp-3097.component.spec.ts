import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3097Component } from './comp-3097.component';

describe('Comp3097Component', () => {
  let component: Comp3097Component;
  let fixture: ComponentFixture<Comp3097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
