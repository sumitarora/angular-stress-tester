import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2604Component } from './comp-2604.component';

describe('Comp2604Component', () => {
  let component: Comp2604Component;
  let fixture: ComponentFixture<Comp2604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
