import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4013Component } from './comp-4013.component';

describe('Comp4013Component', () => {
  let component: Comp4013Component;
  let fixture: ComponentFixture<Comp4013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
