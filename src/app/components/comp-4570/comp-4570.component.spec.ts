import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4570Component } from './comp-4570.component';

describe('Comp4570Component', () => {
  let component: Comp4570Component;
  let fixture: ComponentFixture<Comp4570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
