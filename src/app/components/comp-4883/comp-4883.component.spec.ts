import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4883Component } from './comp-4883.component';

describe('Comp4883Component', () => {
  let component: Comp4883Component;
  let fixture: ComponentFixture<Comp4883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
