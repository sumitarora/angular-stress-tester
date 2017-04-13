import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2446Component } from './comp-2446.component';

describe('Comp2446Component', () => {
  let component: Comp2446Component;
  let fixture: ComponentFixture<Comp2446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
