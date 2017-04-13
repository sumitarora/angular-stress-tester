import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4027Component } from './comp-4027.component';

describe('Comp4027Component', () => {
  let component: Comp4027Component;
  let fixture: ComponentFixture<Comp4027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
