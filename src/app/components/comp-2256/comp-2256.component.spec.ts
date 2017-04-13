import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2256Component } from './comp-2256.component';

describe('Comp2256Component', () => {
  let component: Comp2256Component;
  let fixture: ComponentFixture<Comp2256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
