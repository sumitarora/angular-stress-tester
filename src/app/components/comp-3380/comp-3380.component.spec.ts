import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3380Component } from './comp-3380.component';

describe('Comp3380Component', () => {
  let component: Comp3380Component;
  let fixture: ComponentFixture<Comp3380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
