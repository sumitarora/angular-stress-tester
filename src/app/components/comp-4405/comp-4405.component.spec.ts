import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4405Component } from './comp-4405.component';

describe('Comp4405Component', () => {
  let component: Comp4405Component;
  let fixture: ComponentFixture<Comp4405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
