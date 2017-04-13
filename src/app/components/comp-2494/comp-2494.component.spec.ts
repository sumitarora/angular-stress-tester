import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2494Component } from './comp-2494.component';

describe('Comp2494Component', () => {
  let component: Comp2494Component;
  let fixture: ComponentFixture<Comp2494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
