import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2746Component } from './comp-2746.component';

describe('Comp2746Component', () => {
  let component: Comp2746Component;
  let fixture: ComponentFixture<Comp2746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
