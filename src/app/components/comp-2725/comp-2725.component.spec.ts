import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2725Component } from './comp-2725.component';

describe('Comp2725Component', () => {
  let component: Comp2725Component;
  let fixture: ComponentFixture<Comp2725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
