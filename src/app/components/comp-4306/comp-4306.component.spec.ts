import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4306Component } from './comp-4306.component';

describe('Comp4306Component', () => {
  let component: Comp4306Component;
  let fixture: ComponentFixture<Comp4306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
