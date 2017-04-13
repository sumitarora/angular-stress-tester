import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3759Component } from './comp-3759.component';

describe('Comp3759Component', () => {
  let component: Comp3759Component;
  let fixture: ComponentFixture<Comp3759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
