import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2019Component } from './comp-2019.component';

describe('Comp2019Component', () => {
  let component: Comp2019Component;
  let fixture: ComponentFixture<Comp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
