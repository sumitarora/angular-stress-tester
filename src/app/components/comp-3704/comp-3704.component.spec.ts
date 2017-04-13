import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3704Component } from './comp-3704.component';

describe('Comp3704Component', () => {
  let component: Comp3704Component;
  let fixture: ComponentFixture<Comp3704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
