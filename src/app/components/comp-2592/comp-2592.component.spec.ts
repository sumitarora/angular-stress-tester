import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2592Component } from './comp-2592.component';

describe('Comp2592Component', () => {
  let component: Comp2592Component;
  let fixture: ComponentFixture<Comp2592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
