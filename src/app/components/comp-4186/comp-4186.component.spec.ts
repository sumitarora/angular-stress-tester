import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4186Component } from './comp-4186.component';

describe('Comp4186Component', () => {
  let component: Comp4186Component;
  let fixture: ComponentFixture<Comp4186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
