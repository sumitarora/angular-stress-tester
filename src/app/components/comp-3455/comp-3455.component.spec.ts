import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3455Component } from './comp-3455.component';

describe('Comp3455Component', () => {
  let component: Comp3455Component;
  let fixture: ComponentFixture<Comp3455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
