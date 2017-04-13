import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2775Component } from './comp-2775.component';

describe('Comp2775Component', () => {
  let component: Comp2775Component;
  let fixture: ComponentFixture<Comp2775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
