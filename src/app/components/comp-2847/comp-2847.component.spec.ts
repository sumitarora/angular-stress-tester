import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2847Component } from './comp-2847.component';

describe('Comp2847Component', () => {
  let component: Comp2847Component;
  let fixture: ComponentFixture<Comp2847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
