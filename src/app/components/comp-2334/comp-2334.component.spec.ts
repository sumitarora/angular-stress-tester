import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2334Component } from './comp-2334.component';

describe('Comp2334Component', () => {
  let component: Comp2334Component;
  let fixture: ComponentFixture<Comp2334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
