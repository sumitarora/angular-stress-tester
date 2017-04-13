import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3473Component } from './comp-3473.component';

describe('Comp3473Component', () => {
  let component: Comp3473Component;
  let fixture: ComponentFixture<Comp3473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
