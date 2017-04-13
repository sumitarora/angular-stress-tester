import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4470Component } from './comp-4470.component';

describe('Comp4470Component', () => {
  let component: Comp4470Component;
  let fixture: ComponentFixture<Comp4470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
