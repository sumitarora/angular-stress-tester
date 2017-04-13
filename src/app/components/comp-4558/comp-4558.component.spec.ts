import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4558Component } from './comp-4558.component';

describe('Comp4558Component', () => {
  let component: Comp4558Component;
  let fixture: ComponentFixture<Comp4558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
