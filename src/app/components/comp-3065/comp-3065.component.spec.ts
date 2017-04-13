import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3065Component } from './comp-3065.component';

describe('Comp3065Component', () => {
  let component: Comp3065Component;
  let fixture: ComponentFixture<Comp3065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
