import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4109Component } from './comp-4109.component';

describe('Comp4109Component', () => {
  let component: Comp4109Component;
  let fixture: ComponentFixture<Comp4109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
