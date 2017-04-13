import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2380Component } from './comp-2380.component';

describe('Comp2380Component', () => {
  let component: Comp2380Component;
  let fixture: ComponentFixture<Comp2380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
