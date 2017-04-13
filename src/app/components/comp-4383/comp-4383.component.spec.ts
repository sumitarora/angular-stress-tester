import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4383Component } from './comp-4383.component';

describe('Comp4383Component', () => {
  let component: Comp4383Component;
  let fixture: ComponentFixture<Comp4383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
