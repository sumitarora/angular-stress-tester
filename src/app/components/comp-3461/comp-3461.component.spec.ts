import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3461Component } from './comp-3461.component';

describe('Comp3461Component', () => {
  let component: Comp3461Component;
  let fixture: ComponentFixture<Comp3461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
