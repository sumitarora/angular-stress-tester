import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3824Component } from './comp-3824.component';

describe('Comp3824Component', () => {
  let component: Comp3824Component;
  let fixture: ComponentFixture<Comp3824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
