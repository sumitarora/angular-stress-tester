import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3341Component } from './comp-3341.component';

describe('Comp3341Component', () => {
  let component: Comp3341Component;
  let fixture: ComponentFixture<Comp3341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
