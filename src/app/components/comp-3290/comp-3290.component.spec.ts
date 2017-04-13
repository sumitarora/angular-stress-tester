import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3290Component } from './comp-3290.component';

describe('Comp3290Component', () => {
  let component: Comp3290Component;
  let fixture: ComponentFixture<Comp3290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
