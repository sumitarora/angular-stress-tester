import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3829Component } from './comp-3829.component';

describe('Comp3829Component', () => {
  let component: Comp3829Component;
  let fixture: ComponentFixture<Comp3829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
