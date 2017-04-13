import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2878Component } from './comp-2878.component';

describe('Comp2878Component', () => {
  let component: Comp2878Component;
  let fixture: ComponentFixture<Comp2878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
