import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2150Component } from './comp-2150.component';

describe('Comp2150Component', () => {
  let component: Comp2150Component;
  let fixture: ComponentFixture<Comp2150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
