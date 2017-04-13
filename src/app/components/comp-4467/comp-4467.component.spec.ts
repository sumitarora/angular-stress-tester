import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4467Component } from './comp-4467.component';

describe('Comp4467Component', () => {
  let component: Comp4467Component;
  let fixture: ComponentFixture<Comp4467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
