import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4487Component } from './comp-4487.component';

describe('Comp4487Component', () => {
  let component: Comp4487Component;
  let fixture: ComponentFixture<Comp4487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
