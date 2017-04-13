import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3043Component } from './comp-3043.component';

describe('Comp3043Component', () => {
  let component: Comp3043Component;
  let fixture: ComponentFixture<Comp3043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
