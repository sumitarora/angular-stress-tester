import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2081Component } from './comp-2081.component';

describe('Comp2081Component', () => {
  let component: Comp2081Component;
  let fixture: ComponentFixture<Comp2081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
