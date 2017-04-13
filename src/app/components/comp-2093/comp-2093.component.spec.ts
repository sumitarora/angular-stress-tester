import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2093Component } from './comp-2093.component';

describe('Comp2093Component', () => {
  let component: Comp2093Component;
  let fixture: ComponentFixture<Comp2093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
