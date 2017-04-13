import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2258Component } from './comp-2258.component';

describe('Comp2258Component', () => {
  let component: Comp2258Component;
  let fixture: ComponentFixture<Comp2258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
