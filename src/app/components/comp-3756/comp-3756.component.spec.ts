import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3756Component } from './comp-3756.component';

describe('Comp3756Component', () => {
  let component: Comp3756Component;
  let fixture: ComponentFixture<Comp3756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
