import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2224Component } from './comp-2224.component';

describe('Comp2224Component', () => {
  let component: Comp2224Component;
  let fixture: ComponentFixture<Comp2224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
