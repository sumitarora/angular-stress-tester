import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3348Component } from './comp-3348.component';

describe('Comp3348Component', () => {
  let component: Comp3348Component;
  let fixture: ComponentFixture<Comp3348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
