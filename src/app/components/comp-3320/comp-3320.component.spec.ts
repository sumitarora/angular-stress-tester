import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3320Component } from './comp-3320.component';

describe('Comp3320Component', () => {
  let component: Comp3320Component;
  let fixture: ComponentFixture<Comp3320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
