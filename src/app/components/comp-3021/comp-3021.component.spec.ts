import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3021Component } from './comp-3021.component';

describe('Comp3021Component', () => {
  let component: Comp3021Component;
  let fixture: ComponentFixture<Comp3021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
