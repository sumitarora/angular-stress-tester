import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2603Component } from './comp-2603.component';

describe('Comp2603Component', () => {
  let component: Comp2603Component;
  let fixture: ComponentFixture<Comp2603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
