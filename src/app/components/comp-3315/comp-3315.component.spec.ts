import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3315Component } from './comp-3315.component';

describe('Comp3315Component', () => {
  let component: Comp3315Component;
  let fixture: ComponentFixture<Comp3315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
