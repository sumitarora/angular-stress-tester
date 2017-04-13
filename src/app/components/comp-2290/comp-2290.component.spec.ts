import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2290Component } from './comp-2290.component';

describe('Comp2290Component', () => {
  let component: Comp2290Component;
  let fixture: ComponentFixture<Comp2290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
