import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2418Component } from './comp-2418.component';

describe('Comp2418Component', () => {
  let component: Comp2418Component;
  let fixture: ComponentFixture<Comp2418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
