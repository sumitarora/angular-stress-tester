import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4065Component } from './comp-4065.component';

describe('Comp4065Component', () => {
  let component: Comp4065Component;
  let fixture: ComponentFixture<Comp4065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
