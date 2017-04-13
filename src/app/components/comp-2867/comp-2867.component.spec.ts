import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2867Component } from './comp-2867.component';

describe('Comp2867Component', () => {
  let component: Comp2867Component;
  let fixture: ComponentFixture<Comp2867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
