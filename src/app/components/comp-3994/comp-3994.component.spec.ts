import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3994Component } from './comp-3994.component';

describe('Comp3994Component', () => {
  let component: Comp3994Component;
  let fixture: ComponentFixture<Comp3994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
