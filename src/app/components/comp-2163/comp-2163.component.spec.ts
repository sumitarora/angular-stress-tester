import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2163Component } from './comp-2163.component';

describe('Comp2163Component', () => {
  let component: Comp2163Component;
  let fixture: ComponentFixture<Comp2163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
