import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2798Component } from './comp-2798.component';

describe('Comp2798Component', () => {
  let component: Comp2798Component;
  let fixture: ComponentFixture<Comp2798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
