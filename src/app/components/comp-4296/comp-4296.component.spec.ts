import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4296Component } from './comp-4296.component';

describe('Comp4296Component', () => {
  let component: Comp4296Component;
  let fixture: ComponentFixture<Comp4296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
