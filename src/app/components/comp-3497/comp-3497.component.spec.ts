import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3497Component } from './comp-3497.component';

describe('Comp3497Component', () => {
  let component: Comp3497Component;
  let fixture: ComponentFixture<Comp3497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
