import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2369Component } from './comp-2369.component';

describe('Comp2369Component', () => {
  let component: Comp2369Component;
  let fixture: ComponentFixture<Comp2369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
