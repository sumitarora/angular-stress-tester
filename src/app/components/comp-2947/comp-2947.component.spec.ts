import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2947Component } from './comp-2947.component';

describe('Comp2947Component', () => {
  let component: Comp2947Component;
  let fixture: ComponentFixture<Comp2947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
