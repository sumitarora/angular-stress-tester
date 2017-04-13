import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2955Component } from './comp-2955.component';

describe('Comp2955Component', () => {
  let component: Comp2955Component;
  let fixture: ComponentFixture<Comp2955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
