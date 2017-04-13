import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2281Component } from './comp-2281.component';

describe('Comp2281Component', () => {
  let component: Comp2281Component;
  let fixture: ComponentFixture<Comp2281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
