import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2122Component } from './comp-2122.component';

describe('Comp2122Component', () => {
  let component: Comp2122Component;
  let fixture: ComponentFixture<Comp2122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
