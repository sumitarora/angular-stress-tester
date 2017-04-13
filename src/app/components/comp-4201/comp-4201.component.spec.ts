import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4201Component } from './comp-4201.component';

describe('Comp4201Component', () => {
  let component: Comp4201Component;
  let fixture: ComponentFixture<Comp4201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
