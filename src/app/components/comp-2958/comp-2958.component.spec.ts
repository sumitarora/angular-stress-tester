import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2958Component } from './comp-2958.component';

describe('Comp2958Component', () => {
  let component: Comp2958Component;
  let fixture: ComponentFixture<Comp2958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
