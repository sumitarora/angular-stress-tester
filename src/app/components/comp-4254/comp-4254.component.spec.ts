import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4254Component } from './comp-4254.component';

describe('Comp4254Component', () => {
  let component: Comp4254Component;
  let fixture: ComponentFixture<Comp4254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
