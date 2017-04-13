import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2563Component } from './comp-2563.component';

describe('Comp2563Component', () => {
  let component: Comp2563Component;
  let fixture: ComponentFixture<Comp2563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
