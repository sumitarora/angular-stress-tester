import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1947Component } from './comp-1947.component';

describe('Comp1947Component', () => {
  let component: Comp1947Component;
  let fixture: ComponentFixture<Comp1947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});