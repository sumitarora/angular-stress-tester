import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3343Component } from './comp-3343.component';

describe('Comp3343Component', () => {
  let component: Comp3343Component;
  let fixture: ComponentFixture<Comp3343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
