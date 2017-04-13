import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2448Component } from './comp-2448.component';

describe('Comp2448Component', () => {
  let component: Comp2448Component;
  let fixture: ComponentFixture<Comp2448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
