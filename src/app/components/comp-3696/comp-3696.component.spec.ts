import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3696Component } from './comp-3696.component';

describe('Comp3696Component', () => {
  let component: Comp3696Component;
  let fixture: ComponentFixture<Comp3696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
