import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2717Component } from './comp-2717.component';

describe('Comp2717Component', () => {
  let component: Comp2717Component;
  let fixture: ComponentFixture<Comp2717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
