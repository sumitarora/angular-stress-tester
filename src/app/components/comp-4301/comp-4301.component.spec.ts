import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4301Component } from './comp-4301.component';

describe('Comp4301Component', () => {
  let component: Comp4301Component;
  let fixture: ComponentFixture<Comp4301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
