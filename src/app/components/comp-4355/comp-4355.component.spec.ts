import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4355Component } from './comp-4355.component';

describe('Comp4355Component', () => {
  let component: Comp4355Component;
  let fixture: ComponentFixture<Comp4355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
