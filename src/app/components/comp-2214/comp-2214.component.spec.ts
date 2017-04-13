import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2214Component } from './comp-2214.component';

describe('Comp2214Component', () => {
  let component: Comp2214Component;
  let fixture: ComponentFixture<Comp2214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
