import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3019Component } from './comp-3019.component';

describe('Comp3019Component', () => {
  let component: Comp3019Component;
  let fixture: ComponentFixture<Comp3019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
