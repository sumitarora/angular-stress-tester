import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2642Component } from './comp-2642.component';

describe('Comp2642Component', () => {
  let component: Comp2642Component;
  let fixture: ComponentFixture<Comp2642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
