import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2964Component } from './comp-2964.component';

describe('Comp2964Component', () => {
  let component: Comp2964Component;
  let fixture: ComponentFixture<Comp2964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
