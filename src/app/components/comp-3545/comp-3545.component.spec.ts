import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3545Component } from './comp-3545.component';

describe('Comp3545Component', () => {
  let component: Comp3545Component;
  let fixture: ComponentFixture<Comp3545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
