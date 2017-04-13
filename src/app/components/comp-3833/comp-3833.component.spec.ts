import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3833Component } from './comp-3833.component';

describe('Comp3833Component', () => {
  let component: Comp3833Component;
  let fixture: ComponentFixture<Comp3833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
