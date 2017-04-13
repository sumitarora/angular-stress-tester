import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3736Component } from './comp-3736.component';

describe('Comp3736Component', () => {
  let component: Comp3736Component;
  let fixture: ComponentFixture<Comp3736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
