import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2357Component } from './comp-2357.component';

describe('Comp2357Component', () => {
  let component: Comp2357Component;
  let fixture: ComponentFixture<Comp2357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
