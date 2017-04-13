import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4776Component } from './comp-4776.component';

describe('Comp4776Component', () => {
  let component: Comp4776Component;
  let fixture: ComponentFixture<Comp4776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
