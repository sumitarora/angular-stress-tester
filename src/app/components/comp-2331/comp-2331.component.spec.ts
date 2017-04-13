import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2331Component } from './comp-2331.component';

describe('Comp2331Component', () => {
  let component: Comp2331Component;
  let fixture: ComponentFixture<Comp2331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
