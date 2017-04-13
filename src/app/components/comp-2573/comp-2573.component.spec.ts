import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2573Component } from './comp-2573.component';

describe('Comp2573Component', () => {
  let component: Comp2573Component;
  let fixture: ComponentFixture<Comp2573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
