import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3611Component } from './comp-3611.component';

describe('Comp3611Component', () => {
  let component: Comp3611Component;
  let fixture: ComponentFixture<Comp3611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
