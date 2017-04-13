import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4328Component } from './comp-4328.component';

describe('Comp4328Component', () => {
  let component: Comp4328Component;
  let fixture: ComponentFixture<Comp4328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
