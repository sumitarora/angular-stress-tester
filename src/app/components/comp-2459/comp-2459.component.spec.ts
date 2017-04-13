import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2459Component } from './comp-2459.component';

describe('Comp2459Component', () => {
  let component: Comp2459Component;
  let fixture: ComponentFixture<Comp2459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
