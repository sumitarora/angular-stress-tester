import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2859Component } from './comp-2859.component';

describe('Comp2859Component', () => {
  let component: Comp2859Component;
  let fixture: ComponentFixture<Comp2859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
