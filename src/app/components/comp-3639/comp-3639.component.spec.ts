import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3639Component } from './comp-3639.component';

describe('Comp3639Component', () => {
  let component: Comp3639Component;
  let fixture: ComponentFixture<Comp3639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
