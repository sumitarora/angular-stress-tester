import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2289Component } from './comp-2289.component';

describe('Comp2289Component', () => {
  let component: Comp2289Component;
  let fixture: ComponentFixture<Comp2289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
