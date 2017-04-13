import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3277Component } from './comp-3277.component';

describe('Comp3277Component', () => {
  let component: Comp3277Component;
  let fixture: ComponentFixture<Comp3277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
