import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4988Component } from './comp-4988.component';

describe('Comp4988Component', () => {
  let component: Comp4988Component;
  let fixture: ComponentFixture<Comp4988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
