import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2806Component } from './comp-2806.component';

describe('Comp2806Component', () => {
  let component: Comp2806Component;
  let fixture: ComponentFixture<Comp2806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
