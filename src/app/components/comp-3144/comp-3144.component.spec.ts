import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3144Component } from './comp-3144.component';

describe('Comp3144Component', () => {
  let component: Comp3144Component;
  let fixture: ComponentFixture<Comp3144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
