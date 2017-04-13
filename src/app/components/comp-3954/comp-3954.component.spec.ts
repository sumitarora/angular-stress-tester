import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3954Component } from './comp-3954.component';

describe('Comp3954Component', () => {
  let component: Comp3954Component;
  let fixture: ComponentFixture<Comp3954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
