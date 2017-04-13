import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3671Component } from './comp-3671.component';

describe('Comp3671Component', () => {
  let component: Comp3671Component;
  let fixture: ComponentFixture<Comp3671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
