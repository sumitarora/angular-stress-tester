import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1677Component } from './comp-1677.component';

describe('Comp1677Component', () => {
  let component: Comp1677Component;
  let fixture: ComponentFixture<Comp1677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
