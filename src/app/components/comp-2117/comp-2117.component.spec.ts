import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2117Component } from './comp-2117.component';

describe('Comp2117Component', () => {
  let component: Comp2117Component;
  let fixture: ComponentFixture<Comp2117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
