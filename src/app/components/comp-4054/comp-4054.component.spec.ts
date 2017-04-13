import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4054Component } from './comp-4054.component';

describe('Comp4054Component', () => {
  let component: Comp4054Component;
  let fixture: ComponentFixture<Comp4054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
