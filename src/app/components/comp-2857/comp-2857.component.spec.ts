import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2857Component } from './comp-2857.component';

describe('Comp2857Component', () => {
  let component: Comp2857Component;
  let fixture: ComponentFixture<Comp2857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
