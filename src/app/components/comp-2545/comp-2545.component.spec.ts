import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2545Component } from './comp-2545.component';

describe('Comp2545Component', () => {
  let component: Comp2545Component;
  let fixture: ComponentFixture<Comp2545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
