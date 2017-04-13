import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3892Component } from './comp-3892.component';

describe('Comp3892Component', () => {
  let component: Comp3892Component;
  let fixture: ComponentFixture<Comp3892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
