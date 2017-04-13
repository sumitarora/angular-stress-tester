import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2469Component } from './comp-2469.component';

describe('Comp2469Component', () => {
  let component: Comp2469Component;
  let fixture: ComponentFixture<Comp2469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
