import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3261Component } from './comp-3261.component';

describe('Comp3261Component', () => {
  let component: Comp3261Component;
  let fixture: ComponentFixture<Comp3261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
