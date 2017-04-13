import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2961Component } from './comp-2961.component';

describe('Comp2961Component', () => {
  let component: Comp2961Component;
  let fixture: ComponentFixture<Comp2961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
