import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2534Component } from './comp-2534.component';

describe('Comp2534Component', () => {
  let component: Comp2534Component;
  let fixture: ComponentFixture<Comp2534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
