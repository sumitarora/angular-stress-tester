import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2191Component } from './comp-2191.component';

describe('Comp2191Component', () => {
  let component: Comp2191Component;
  let fixture: ComponentFixture<Comp2191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
