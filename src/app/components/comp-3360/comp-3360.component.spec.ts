import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3360Component } from './comp-3360.component';

describe('Comp3360Component', () => {
  let component: Comp3360Component;
  let fixture: ComponentFixture<Comp3360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
