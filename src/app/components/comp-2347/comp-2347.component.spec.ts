import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2347Component } from './comp-2347.component';

describe('Comp2347Component', () => {
  let component: Comp2347Component;
  let fixture: ComponentFixture<Comp2347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
