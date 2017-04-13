import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3657Component } from './comp-3657.component';

describe('Comp3657Component', () => {
  let component: Comp3657Component;
  let fixture: ComponentFixture<Comp3657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
