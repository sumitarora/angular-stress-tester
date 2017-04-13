import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3492Component } from './comp-3492.component';

describe('Comp3492Component', () => {
  let component: Comp3492Component;
  let fixture: ComponentFixture<Comp3492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
