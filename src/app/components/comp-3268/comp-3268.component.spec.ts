import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3268Component } from './comp-3268.component';

describe('Comp3268Component', () => {
  let component: Comp3268Component;
  let fixture: ComponentFixture<Comp3268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
