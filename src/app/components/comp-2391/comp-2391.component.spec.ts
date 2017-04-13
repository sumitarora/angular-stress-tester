import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2391Component } from './comp-2391.component';

describe('Comp2391Component', () => {
  let component: Comp2391Component;
  let fixture: ComponentFixture<Comp2391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
