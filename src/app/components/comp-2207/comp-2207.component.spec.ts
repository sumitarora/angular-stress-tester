import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2207Component } from './comp-2207.component';

describe('Comp2207Component', () => {
  let component: Comp2207Component;
  let fixture: ComponentFixture<Comp2207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
