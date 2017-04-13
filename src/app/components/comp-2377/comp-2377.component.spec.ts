import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2377Component } from './comp-2377.component';

describe('Comp2377Component', () => {
  let component: Comp2377Component;
  let fixture: ComponentFixture<Comp2377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
