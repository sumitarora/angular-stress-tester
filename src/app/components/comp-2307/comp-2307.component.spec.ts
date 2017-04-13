import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2307Component } from './comp-2307.component';

describe('Comp2307Component', () => {
  let component: Comp2307Component;
  let fixture: ComponentFixture<Comp2307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
