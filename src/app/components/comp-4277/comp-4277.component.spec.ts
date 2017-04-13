import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4277Component } from './comp-4277.component';

describe('Comp4277Component', () => {
  let component: Comp4277Component;
  let fixture: ComponentFixture<Comp4277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
