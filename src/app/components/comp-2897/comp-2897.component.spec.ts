import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2897Component } from './comp-2897.component';

describe('Comp2897Component', () => {
  let component: Comp2897Component;
  let fixture: ComponentFixture<Comp2897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
