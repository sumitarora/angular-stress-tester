import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3962Component } from './comp-3962.component';

describe('Comp3962Component', () => {
  let component: Comp3962Component;
  let fixture: ComponentFixture<Comp3962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
