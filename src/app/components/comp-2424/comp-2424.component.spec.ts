import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2424Component } from './comp-2424.component';

describe('Comp2424Component', () => {
  let component: Comp2424Component;
  let fixture: ComponentFixture<Comp2424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
