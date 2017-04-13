import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3018Component } from './comp-3018.component';

describe('Comp3018Component', () => {
  let component: Comp3018Component;
  let fixture: ComponentFixture<Comp3018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
