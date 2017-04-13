import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2881Component } from './comp-2881.component';

describe('Comp2881Component', () => {
  let component: Comp2881Component;
  let fixture: ComponentFixture<Comp2881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
