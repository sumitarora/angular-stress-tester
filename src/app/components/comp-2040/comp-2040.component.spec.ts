import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2040Component } from './comp-2040.component';

describe('Comp2040Component', () => {
  let component: Comp2040Component;
  let fixture: ComponentFixture<Comp2040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
