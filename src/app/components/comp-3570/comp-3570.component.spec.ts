import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3570Component } from './comp-3570.component';

describe('Comp3570Component', () => {
  let component: Comp3570Component;
  let fixture: ComponentFixture<Comp3570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
