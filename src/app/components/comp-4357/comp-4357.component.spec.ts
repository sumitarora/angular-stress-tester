import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4357Component } from './comp-4357.component';

describe('Comp4357Component', () => {
  let component: Comp4357Component;
  let fixture: ComponentFixture<Comp4357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
