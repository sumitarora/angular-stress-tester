import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3463Component } from './comp-3463.component';

describe('Comp3463Component', () => {
  let component: Comp3463Component;
  let fixture: ComponentFixture<Comp3463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
