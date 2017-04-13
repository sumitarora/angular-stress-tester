import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4561Component } from './comp-4561.component';

describe('Comp4561Component', () => {
  let component: Comp4561Component;
  let fixture: ComponentFixture<Comp4561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
