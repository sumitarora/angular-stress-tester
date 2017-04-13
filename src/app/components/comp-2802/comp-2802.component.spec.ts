import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2802Component } from './comp-2802.component';

describe('Comp2802Component', () => {
  let component: Comp2802Component;
  let fixture: ComponentFixture<Comp2802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
