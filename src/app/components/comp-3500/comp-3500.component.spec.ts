import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3500Component } from './comp-3500.component';

describe('Comp3500Component', () => {
  let component: Comp3500Component;
  let fixture: ComponentFixture<Comp3500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
