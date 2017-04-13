import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4019Component } from './comp-4019.component';

describe('Comp4019Component', () => {
  let component: Comp4019Component;
  let fixture: ComponentFixture<Comp4019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
