import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4623Component } from './comp-4623.component';

describe('Comp4623Component', () => {
  let component: Comp4623Component;
  let fixture: ComponentFixture<Comp4623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
