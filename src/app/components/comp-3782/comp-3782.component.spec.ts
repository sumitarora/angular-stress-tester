import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3782Component } from './comp-3782.component';

describe('Comp3782Component', () => {
  let component: Comp3782Component;
  let fixture: ComponentFixture<Comp3782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
