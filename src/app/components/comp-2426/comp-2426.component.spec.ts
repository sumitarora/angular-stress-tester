import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2426Component } from './comp-2426.component';

describe('Comp2426Component', () => {
  let component: Comp2426Component;
  let fixture: ComponentFixture<Comp2426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
