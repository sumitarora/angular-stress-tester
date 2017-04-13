import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3638Component } from './comp-3638.component';

describe('Comp3638Component', () => {
  let component: Comp3638Component;
  let fixture: ComponentFixture<Comp3638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
