import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4621Component } from './comp-4621.component';

describe('Comp4621Component', () => {
  let component: Comp4621Component;
  let fixture: ComponentFixture<Comp4621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
