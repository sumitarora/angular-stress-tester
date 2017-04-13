import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2198Component } from './comp-2198.component';

describe('Comp2198Component', () => {
  let component: Comp2198Component;
  let fixture: ComponentFixture<Comp2198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
