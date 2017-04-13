import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4650Component } from './comp-4650.component';

describe('Comp4650Component', () => {
  let component: Comp4650Component;
  let fixture: ComponentFixture<Comp4650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
