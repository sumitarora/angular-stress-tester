import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4707Component } from './comp-4707.component';

describe('Comp4707Component', () => {
  let component: Comp4707Component;
  let fixture: ComponentFixture<Comp4707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
