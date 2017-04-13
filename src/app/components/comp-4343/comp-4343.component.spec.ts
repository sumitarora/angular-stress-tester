import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4343Component } from './comp-4343.component';

describe('Comp4343Component', () => {
  let component: Comp4343Component;
  let fixture: ComponentFixture<Comp4343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
