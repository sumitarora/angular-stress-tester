import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2730Component } from './comp-2730.component';

describe('Comp2730Component', () => {
  let component: Comp2730Component;
  let fixture: ComponentFixture<Comp2730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
