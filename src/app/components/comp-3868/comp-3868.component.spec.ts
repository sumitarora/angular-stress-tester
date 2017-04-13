import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3868Component } from './comp-3868.component';

describe('Comp3868Component', () => {
  let component: Comp3868Component;
  let fixture: ComponentFixture<Comp3868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
