import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4215Component } from './comp-4215.component';

describe('Comp4215Component', () => {
  let component: Comp4215Component;
  let fixture: ComponentFixture<Comp4215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
