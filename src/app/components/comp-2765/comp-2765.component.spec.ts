import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2765Component } from './comp-2765.component';

describe('Comp2765Component', () => {
  let component: Comp2765Component;
  let fixture: ComponentFixture<Comp2765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
