import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1930Component } from './comp-1930.component';

describe('Comp1930Component', () => {
  let component: Comp1930Component;
  let fixture: ComponentFixture<Comp1930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
