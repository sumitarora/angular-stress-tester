import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3839Component } from './comp-3839.component';

describe('Comp3839Component', () => {
  let component: Comp3839Component;
  let fixture: ComponentFixture<Comp3839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
