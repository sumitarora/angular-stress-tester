import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2969Component } from './comp-2969.component';

describe('Comp2969Component', () => {
  let component: Comp2969Component;
  let fixture: ComponentFixture<Comp2969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
