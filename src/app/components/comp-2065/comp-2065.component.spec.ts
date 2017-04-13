import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2065Component } from './comp-2065.component';

describe('Comp2065Component', () => {
  let component: Comp2065Component;
  let fixture: ComponentFixture<Comp2065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
