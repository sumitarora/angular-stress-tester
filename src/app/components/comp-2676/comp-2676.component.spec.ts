import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2676Component } from './comp-2676.component';

describe('Comp2676Component', () => {
  let component: Comp2676Component;
  let fixture: ComponentFixture<Comp2676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
