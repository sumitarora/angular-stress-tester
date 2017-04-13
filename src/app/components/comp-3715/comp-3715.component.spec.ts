import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3715Component } from './comp-3715.component';

describe('Comp3715Component', () => {
  let component: Comp3715Component;
  let fixture: ComponentFixture<Comp3715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
