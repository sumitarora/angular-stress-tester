import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3084Component } from './comp-3084.component';

describe('Comp3084Component', () => {
  let component: Comp3084Component;
  let fixture: ComponentFixture<Comp3084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
