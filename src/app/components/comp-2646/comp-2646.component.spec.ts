import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2646Component } from './comp-2646.component';

describe('Comp2646Component', () => {
  let component: Comp2646Component;
  let fixture: ComponentFixture<Comp2646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
