import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2537Component } from './comp-2537.component';

describe('Comp2537Component', () => {
  let component: Comp2537Component;
  let fixture: ComponentFixture<Comp2537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
