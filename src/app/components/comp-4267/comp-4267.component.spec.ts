import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4267Component } from './comp-4267.component';

describe('Comp4267Component', () => {
  let component: Comp4267Component;
  let fixture: ComponentFixture<Comp4267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
