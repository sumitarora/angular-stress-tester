import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3467Component } from './comp-3467.component';

describe('Comp3467Component', () => {
  let component: Comp3467Component;
  let fixture: ComponentFixture<Comp3467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
