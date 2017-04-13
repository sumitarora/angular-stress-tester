import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4011Component } from './comp-4011.component';

describe('Comp4011Component', () => {
  let component: Comp4011Component;
  let fixture: ComponentFixture<Comp4011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
