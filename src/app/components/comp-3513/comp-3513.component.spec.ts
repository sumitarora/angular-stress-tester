import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3513Component } from './comp-3513.component';

describe('Comp3513Component', () => {
  let component: Comp3513Component;
  let fixture: ComponentFixture<Comp3513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
