import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4696Component } from './comp-4696.component';

describe('Comp4696Component', () => {
  let component: Comp4696Component;
  let fixture: ComponentFixture<Comp4696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});