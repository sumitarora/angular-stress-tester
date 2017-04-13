import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2704Component } from './comp-2704.component';

describe('Comp2704Component', () => {
  let component: Comp2704Component;
  let fixture: ComponentFixture<Comp2704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
