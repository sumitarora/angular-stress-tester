import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3895Component } from './comp-3895.component';

describe('Comp3895Component', () => {
  let component: Comp3895Component;
  let fixture: ComponentFixture<Comp3895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
