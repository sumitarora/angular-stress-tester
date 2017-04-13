import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2558Component } from './comp-2558.component';

describe('Comp2558Component', () => {
  let component: Comp2558Component;
  let fixture: ComponentFixture<Comp2558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
