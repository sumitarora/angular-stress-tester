import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2848Component } from './comp-2848.component';

describe('Comp2848Component', () => {
  let component: Comp2848Component;
  let fixture: ComponentFixture<Comp2848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
