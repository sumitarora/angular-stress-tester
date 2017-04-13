import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2939Component } from './comp-2939.component';

describe('Comp2939Component', () => {
  let component: Comp2939Component;
  let fixture: ComponentFixture<Comp2939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
