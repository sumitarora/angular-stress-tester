import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4157Component } from './comp-4157.component';

describe('Comp4157Component', () => {
  let component: Comp4157Component;
  let fixture: ComponentFixture<Comp4157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
