import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3426Component } from './comp-3426.component';

describe('Comp3426Component', () => {
  let component: Comp3426Component;
  let fixture: ComponentFixture<Comp3426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
