import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2229Component } from './comp-2229.component';

describe('Comp2229Component', () => {
  let component: Comp2229Component;
  let fixture: ComponentFixture<Comp2229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
