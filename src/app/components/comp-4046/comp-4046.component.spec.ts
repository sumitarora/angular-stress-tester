import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4046Component } from './comp-4046.component';

describe('Comp4046Component', () => {
  let component: Comp4046Component;
  let fixture: ComponentFixture<Comp4046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
