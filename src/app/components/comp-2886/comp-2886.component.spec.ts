import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2886Component } from './comp-2886.component';

describe('Comp2886Component', () => {
  let component: Comp2886Component;
  let fixture: ComponentFixture<Comp2886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
