import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3368Component } from './comp-3368.component';

describe('Comp3368Component', () => {
  let component: Comp3368Component;
  let fixture: ComponentFixture<Comp3368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
