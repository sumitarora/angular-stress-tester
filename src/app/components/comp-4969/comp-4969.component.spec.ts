import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4969Component } from './comp-4969.component';

describe('Comp4969Component', () => {
  let component: Comp4969Component;
  let fixture: ComponentFixture<Comp4969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
