import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4117Component } from './comp-4117.component';

describe('Comp4117Component', () => {
  let component: Comp4117Component;
  let fixture: ComponentFixture<Comp4117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
