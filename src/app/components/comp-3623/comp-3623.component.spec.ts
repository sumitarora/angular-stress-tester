import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3623Component } from './comp-3623.component';

describe('Comp3623Component', () => {
  let component: Comp3623Component;
  let fixture: ComponentFixture<Comp3623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
