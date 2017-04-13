import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2407Component } from './comp-2407.component';

describe('Comp2407Component', () => {
  let component: Comp2407Component;
  let fixture: ComponentFixture<Comp2407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
