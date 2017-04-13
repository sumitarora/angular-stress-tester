import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2399Component } from './comp-2399.component';

describe('Comp2399Component', () => {
  let component: Comp2399Component;
  let fixture: ComponentFixture<Comp2399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
