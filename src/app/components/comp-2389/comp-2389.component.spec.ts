import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2389Component } from './comp-2389.component';

describe('Comp2389Component', () => {
  let component: Comp2389Component;
  let fixture: ComponentFixture<Comp2389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
