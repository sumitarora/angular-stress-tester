import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2046Component } from './comp-2046.component';

describe('Comp2046Component', () => {
  let component: Comp2046Component;
  let fixture: ComponentFixture<Comp2046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
