import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4367Component } from './comp-4367.component';

describe('Comp4367Component', () => {
  let component: Comp4367Component;
  let fixture: ComponentFixture<Comp4367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
