import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2909Component } from './comp-2909.component';

describe('Comp2909Component', () => {
  let component: Comp2909Component;
  let fixture: ComponentFixture<Comp2909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
