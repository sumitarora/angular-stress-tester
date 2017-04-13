import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2527Component } from './comp-2527.component';

describe('Comp2527Component', () => {
  let component: Comp2527Component;
  let fixture: ComponentFixture<Comp2527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
