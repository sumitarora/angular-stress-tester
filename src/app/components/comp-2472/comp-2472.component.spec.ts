import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2472Component } from './comp-2472.component';

describe('Comp2472Component', () => {
  let component: Comp2472Component;
  let fixture: ComponentFixture<Comp2472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
