import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2497Component } from './comp-2497.component';

describe('Comp2497Component', () => {
  let component: Comp2497Component;
  let fixture: ComponentFixture<Comp2497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
