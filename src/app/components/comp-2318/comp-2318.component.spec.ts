import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2318Component } from './comp-2318.component';

describe('Comp2318Component', () => {
  let component: Comp2318Component;
  let fixture: ComponentFixture<Comp2318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
