import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4549Component } from './comp-4549.component';

describe('Comp4549Component', () => {
  let component: Comp4549Component;
  let fixture: ComponentFixture<Comp4549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
