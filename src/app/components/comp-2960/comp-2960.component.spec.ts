import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2960Component } from './comp-2960.component';

describe('Comp2960Component', () => {
  let component: Comp2960Component;
  let fixture: ComponentFixture<Comp2960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
