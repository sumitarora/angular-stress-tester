import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3626Component } from './comp-3626.component';

describe('Comp3626Component', () => {
  let component: Comp3626Component;
  let fixture: ComponentFixture<Comp3626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
