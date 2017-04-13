import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4434Component } from './comp-4434.component';

describe('Comp4434Component', () => {
  let component: Comp4434Component;
  let fixture: ComponentFixture<Comp4434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
