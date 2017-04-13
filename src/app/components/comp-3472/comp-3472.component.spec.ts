import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3472Component } from './comp-3472.component';

describe('Comp3472Component', () => {
  let component: Comp3472Component;
  let fixture: ComponentFixture<Comp3472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
