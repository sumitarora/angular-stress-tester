import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2328Component } from './comp-2328.component';

describe('Comp2328Component', () => {
  let component: Comp2328Component;
  let fixture: ComponentFixture<Comp2328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
