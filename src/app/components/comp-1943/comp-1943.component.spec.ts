import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1943Component } from './comp-1943.component';

describe('Comp1943Component', () => {
  let component: Comp1943Component;
  let fixture: ComponentFixture<Comp1943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
