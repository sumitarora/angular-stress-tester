import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4356Component } from './comp-4356.component';

describe('Comp4356Component', () => {
  let component: Comp4356Component;
  let fixture: ComponentFixture<Comp4356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
