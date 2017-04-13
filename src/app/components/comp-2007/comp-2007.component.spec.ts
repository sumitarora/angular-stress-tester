import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2007Component } from './comp-2007.component';

describe('Comp2007Component', () => {
  let component: Comp2007Component;
  let fixture: ComponentFixture<Comp2007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
