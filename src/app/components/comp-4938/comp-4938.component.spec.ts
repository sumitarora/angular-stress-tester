import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4938Component } from './comp-4938.component';

describe('Comp4938Component', () => {
  let component: Comp4938Component;
  let fixture: ComponentFixture<Comp4938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
