import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2382Component } from './comp-2382.component';

describe('Comp2382Component', () => {
  let component: Comp2382Component;
  let fixture: ComponentFixture<Comp2382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
