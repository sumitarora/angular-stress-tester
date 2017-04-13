import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3888Component } from './comp-3888.component';

describe('Comp3888Component', () => {
  let component: Comp3888Component;
  let fixture: ComponentFixture<Comp3888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
