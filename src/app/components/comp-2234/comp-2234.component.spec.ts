import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2234Component } from './comp-2234.component';

describe('Comp2234Component', () => {
  let component: Comp2234Component;
  let fixture: ComponentFixture<Comp2234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
