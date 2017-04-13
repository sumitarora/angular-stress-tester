import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2465Component } from './comp-2465.component';

describe('Comp2465Component', () => {
  let component: Comp2465Component;
  let fixture: ComponentFixture<Comp2465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
