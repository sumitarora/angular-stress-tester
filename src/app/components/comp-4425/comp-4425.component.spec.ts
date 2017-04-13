import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4425Component } from './comp-4425.component';

describe('Comp4425Component', () => {
  let component: Comp4425Component;
  let fixture: ComponentFixture<Comp4425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
