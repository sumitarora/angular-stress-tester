import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4169Component } from './comp-4169.component';

describe('Comp4169Component', () => {
  let component: Comp4169Component;
  let fixture: ComponentFixture<Comp4169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
